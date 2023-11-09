import React, { useEffect, useState } from "react";

function Home() {
  const url = "https://website-url-project-backend.vercel.app";
  const [data, setData] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState(null);
  const [dataPost, setDataPost] = useState(false);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  useEffect(() => {
    async function fetchData() {
      let userResponse = await fetch(`${url}/domain`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("access_token"),
        },
      });

      if (userResponse.ok) {
        let finalData= await userResponse.json();
        setData(finalData.message);
      } else {
        console.log("login firtst");
      }
    }
    accessToken?fetchData():null
  }, [dataPost]);

  const addData = async (e) => {
    e.preventDefault();
    async function fetchData() {
      try {
        let userResponse = await fetch(`${url}/domain`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          },
          body: JSON.stringify({ url: websiteUrl }),
        });

        if (userResponse.ok) {
          let finalData = await userResponse.json();
          setDataPost(!dataPost);
          alert(finalData.message);
        } else {
          console.log(userResponse);
          alert("there is some error with the request ");
        }
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  };

  const deleteBtn = async (id) => {
    try {
      let userResponse = await fetch(`${url}/domain/${id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("access_token"),
        },
      });

      if (userResponse.ok) {
        let finalData = await userResponse.json();
        setDataPost(!dataPost);
      } else {
        console.log(userResponse);
        alert("there is some error with the request ");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const favoriteBtn = async (id, favorite) => {
    try {
      let userResponse = await fetch(`${url}/domain/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({ favorite }),
      });

      if (userResponse.ok) {
        let finalData = await userResponse.json();
        setDataPost(!dataPost);
      } else {
        console.log(userResponse);
        alert("there is some error with the request ");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="p-6">
      <form action="" className="" onSubmit={addData}>
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Enter your URL here"
          onChange={(e) => {
            setWebsiteUrl(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="">
        <h1 className="text-xl font-bold">Here you can see your URL details</h1>

        {accessToken ? (
          <table className="mt-4 w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Website Domain</th>
                <th className="border p-2">Word Count</th>
                <th className="border p-2">Web Links</th>
                <th className="border p-2">Media Links</th>
                <th className="border p-2">Favorite</th>
                <th className="border p-2">Delete</th>
                <th className="border p-2">Favorite</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((item, i) => (
                  <tr key={item._id}>
                    <td className="border p-2">{item.domainName}</td>
                    <td className="border p-2">{item.wordCount}</td>
                    <td className="border p-2">{item.webLinks}</td>
                    <td className="border p-2">{item.mediaLinks}</td>
                    <td className="border p-2">{item.favorite.toString()}</td>
                    <td
                      className=" border p-2 hover:bg-red-200"
                      onClick={(e) => {
                        deleteBtn(item._id);
                      }}
                    >
                      DeleteBtn
                    </td>
                    <td
                      className="border p-2 hover:bg-green-200"
                      value={item._id}
                      onClick={(e) => {
                        favoriteBtn(item._id, !item.favorite);
                      }}
                    >
                      {item.favorite
                        ? "Delete from favorite"
                        : "Add to favorite"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="mt-4 text-red-500">
                  <td>You do not have any Url data</td>
                  You do not have any Url data
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <h1 className="mt-4 text-red-500">
            You are not logged in. Please log in first
          </h1>
        )}
      </div>
    </div>
  );
}

export default Home;
