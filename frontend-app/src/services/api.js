const BASE_URL = "https://website-url-project-backend.vercel.app";

export const fetchDataFromServer = async (method = "GET", data = null) => {
    const url = `${BASE_URL}/domain`;

    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
        },
        body: data ? JSON.stringify(data) : null,
    };

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};