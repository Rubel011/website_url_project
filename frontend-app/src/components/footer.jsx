import React from "react";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-600 h-[200px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-3">NEWSLETTER</h1>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="your@email.com"
              className="text-slate-400 p-1 px-2 rounded"
            />
            <button className="ml-2 px-2 py-1 border border-slate-900 text-white rounded bg-slate-900 font-semibold">subscribe</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 h-[200px] flex items-center justify-center">
      <ul className="text-white font-medium flex items-center justify-center space-x-10">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">FAQs</li>
          <li className="hover:underline cursor-pointer">Store locator</li>
          <li className="hover:underline cursor-pointer">Contact us</li>
          <li className="hover:underline cursor-pointer">News</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
