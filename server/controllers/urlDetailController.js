const axios = require('axios');
const cheerio = require("cheerio");
const { Domain } = require("../models/urlDetail");
const { errorResponse, successResponse } = require("../helpers/successAndError");


module.exports.retriveUrlDataByUserId = async (req, res) => {
    try {
        // Get the userId from authentication middleware
        const userId = req.user.userId;

        const documents = await Domain.find({ userId });

        if (documents.length === 0) {
            return res.status(404).json(errorResponse(404, "No documents found for the specified userId."));
        }

        // Return the matching documents as a JSON response
        res.status(200).json(successResponse(200, "returning data that are matching", documents));

    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
}

module.exports.addNewUrlData = async (req, res) => {
    try {
        // Get the userId from authentication middleware
        const userId = req.user.userId;
        // Get the URL data from the client
        const { url } = req.body;

        if (!url) {
            // Return a 400 Bad Request response with an error message
            return res.status(400).json(errorResponse(400, "Please provide a valid website URL in the request body."));
        }
        if (await Domain.findOne({ domainName: url ,userId})) {
            return res.status(400).json(errorResponse(400, "This domain has already been added. You cannot add the same domain again."));
        }

        // Fetch the HTML content from the provided URL
        const response = await axios.get(url);
        const html = response.data;
        // Use Cheerio to parse the HTML content
        const $ = cheerio.load(html);
        const bodyText = $('body').text();
        const words = bodyText.split(/\s+/);
        const wordCount = words.length;

        // Collect media links (in this case, image links)
        const mediaLinks = [];
        $('img').each((index, element) => {
            const src = $(element).attr('src');
            src ? mediaLinks.push(src) : null;
        });

        // Collect web links (anchors)
        const webLinks = [];
        $('a').each((index, element) => {
            const link = $(element).attr('href');
            link ? webLinks.push(link) : null;
        });

        // Create a new Domain document and save it to the database
        const urlData = new Domain({ userId, domainName: url, wordCount, webLinks, mediaLinks });
        await urlData.save();

        // Return a success response with a message
        res.status(200).json(successResponse(200, "Website data has been successfully stored in the database.", urlData));
    } catch (err) {
        console.log(err.message);
        // Handle any errors and return a 500 Internal Server Error response
        res.status(500).json(errorResponse(500, err.message));
    }
}

module.exports.updateNewUrlData = async (req, res) => {
    try {
        const id = req.params.id;

        // Get the userId from authentication middleware
        const userId = req.user.userId;

        const { favorite } = req.body;

        // find by ID and update the "favorite" field
        const updatedDocument = await Domain.findByIdAndUpdate({ _id: id, userId }, { favorite }, { new: true });

        if (!updatedDocument) {
            return res.status(404).json(errorResponse(404, "Document not found"));
        }

        res.status(200).json(successResponse(200, "Favorite field has been updated.", updatedDocument));
    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
}


module.exports.removeNewUrlData = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedData = await Domain.findByIdAndDelete(id);

        if (!deletedData) {
            return res.status(404).json(errorResponse(404, "Data not found"));
        }

        res.status(200).json(successResponse(200, "Data has been successfully deleted."));
    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
}