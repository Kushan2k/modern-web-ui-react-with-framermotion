import React from 'react'
import img from '../assets/services/service-3.png'

function HomePage() {
  return (
    <div className=" text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Buy, Create & Sell Unique NFTs</h1>
      <p className="text-lg mb-6">
        NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        Explore NFTs
      </button>
      <div className="flex mt-8">
        <div className="w-1/2 pr-4">
          <p className="text-xl font-semibold">Nico NFT Marketplace Overview</p>
          <p>World Arts 30,000+</p>
          <p>Digital Artists 17,000+</p>
          <p>Live Auctions 22,000+</p>
          <p>Unique Products 50,000+</p>
        </div>
        <div className="w-1/2 pl-4">
          <img
            src={img}
            alt="Cyber Samurai #177"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage