import React from 'react';
import { TiHeart } from "react-icons/ti";

export default function Wishlist() {
  return (
    <div className="relative h-[400px]  from-indigo-600 via-indigo-700 ">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0cafa7]">
          Your wishlist
        </h1>
        <div className="shadow-lg rounded-lg overflow-hidden mx-3 md:mx-4">
        <table className="w-full table-fixed">
                    <thead>
                      <tr className="bg-gray-100">
                      <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                          Book img
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                          Book title
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                          Author
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                          Genre
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="py-4 px-6 border-b border-gray-200">
                          box
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                          On
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          www.box.net
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          www.box.net
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          <button className="bg-red-500 text-white py-2 px-8 rounded-[5px] text-xs">
                            Release
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 border-b border-gray-200">
                          FR
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                          Off
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          www.frr.com
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          www.frr.com
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">
                          <button className="bg-red-500 text-white py-2 px-8 rounded-[5px] text-xs">
                            Release
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
        </div>
      </div>
    </div>
  );
}
