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
        let finalData = await userResponse.json();
        setData(finalData.data);
      } else {
      }
    }
    fetchData();
  }, [dataPost]);

  const addData = async (e) => {
    e.preventDefault();
    async function fetchData() {
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
        alert(finalData.message);
      } else {
        console.log(userResponse);
      }
    }
    fetchData();
  };

  return (
    <div className="p-6">
      <form action="" className="" onSubmit={addData}>
        <input
          type="text"
          placeholder="Enter you URL here"
          onChange={(e) => {
            setWebsiteUrl(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {/* <div className="">
        <h1>Here you can see you Url details</h1>
        <table>
          <thead>
            <tr>
              <th>website Domain</th>
              <th>Word Count</th>
              <th>webLinks</th>
              <th>mediaLinks</th>
              <th>favorite</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id}>
                <td>{item.domainName}</td>
                <td>{item.wordCount}</td>
                <td>{item.webLinks}</td>
                <td>{item.mediaLinks}</td>
                <td>{item.favorite}</td>
                <td>delete</td>
              </tr>
            ))}
          </tbody>
        </table>

        {accessToken ? "" : ""}
      </div> */}
    </div>
  );
}

export default Home;
