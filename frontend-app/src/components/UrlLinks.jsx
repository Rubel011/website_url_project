import React from "react";

export const UrlLinks = ({ links, states }) => {
  const { toggleLinkWeb, setToggleLinkWeb, toggleLink, setToggleLink } = states;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-gray-800 text-white p-6 rounded shadow-lg max-w-full overflow-auto">
        <ul>
          {links.map((link, index) =>
            index < 5 ? (
              <li key={index} className="mb-2 mr-1">
                {link}
              </li>
            ) : null
          )}
        </ul>
      </div>
      <button
        onClick={(e) => {
          setToggleLinkWeb(toggleLinkWeb ? false : toggleLinkWeb);
          setToggleLink(setToggleLink ? false : toggleLink);
        }}
        className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Close
      </button>
    </div>
  );
};
