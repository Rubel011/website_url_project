// UrlItem.js
import React, { useState } from "react";
import LinkList from "./linkList";

const UrlItem = ({ item, onDelete, onFavoriteToggle }) => {
  const [toggleLinkWeb, setToggleLinkWeb] = useState(false);
  const [toggleLink, setToggleLink] = useState(false);

  return (
    <tr>
      <td className="border p-2">{item.domainName}</td>
      <td className="border p-2">{item.wordCount}</td>
      <td className="border p-2">
        {item.webLinks.length === 0 ? (
          <p className="text-red-400">NO Links</p>
        ) : (
          <li
            className="text-green-400 w-full hover:text-gray-700"
            onClick={() => setToggleLinkWeb(!toggleLinkWeb)}
          >
            {item.webLinks.length} Links <br />
            Click to see
            {toggleLinkWeb ? (
              <LinkList
                links={item.webLinks}
                states={{
                  toggleLinkWeb,
                  setToggleLinkWeb,
                  toggleLink,
                  setToggleLink,
                }}
              />
            ) : null}
          </li>
        )}
      </td>
      <td className="border p-2">
        {item.mediaLinks.length === 0 ? (
          <p className="text-red-400">NO Links</p>
        ) : (
          <li
            className="text-green-400 w-full hover:text-gray-700"
            onClick={() => setToggleLink(!toggleLink)}
          >
            {item.mediaLinks.length} Links <br />
            Click to see
            {toggleLink ? (
              <LinkList
                links={item.mediaLinks}
                states={{
                  toggleLinkWeb,
                  setToggleLinkWeb,
                  toggleLink,
                  setToggleLink,
                }}
              />
            ) : null}
          </li>
        )}
      </td>
      <td
        className={`border p-2 ${
          item.favorite ? "text-green-400" : "text-red-400"
        }`}
      >
        {item.favorite.toString()}
      </td>
      <td
        className="border p-2 hover:bg-red-200"
        onClick={() => onDelete(item._id)}
      >
        DeleteBtn
      </td>
      <td
        className="border p-2 hover:bg-green-200"
        onClick={() => onFavoriteToggle(item._id, !item.favorite)}
      >
        {item.favorite ? "Delete from favorite" : "Add to favorite"}
      </td>
    </tr>
  );
};

export default UrlItem;
