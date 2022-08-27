import React from "react";
import Head from "next/head";

const Ihubwalkthrough = () => {
  return (
    <div>
      <Head>
        <title>iHUB Walkthrough</title>
      </Head>
      <div className="bg-blue-300 min-h-screen py-12">
        <div className="text-black text-center text-3xl flex items-center justify-center">
          <div>Welcome</div>
        </div>
        <div className="text-black text-center text-3xl flex items-center justify-center">
          <div>to the virtual tour of</div>
        </div>
        <div className="my-3 md:text-6xl text-5xl flex items-center justify-center">
          <div className="text-center">
            <span className="text-white">i</span>
            <span className="text-red-600">HUB</span>
            <span> </span>
            <span className="text-white">Divya</span>
            <span className="text-red-600">Sampark</span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center mt-24 mb-4">
          <div className="mx-auto my-10 text-center">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://vmyth.github.io/iHUB-Office/iHub%20Main%20Office%20IITR/"
            >
              <img src="/ihub1.jpeg" className="w-80" alt="1st image" />
            </a>
            <h1 className="text-black text-lg">Main Office @ IITR</h1>
          </div>
          <div className="mx-auto my-10 text-center">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://vmyth.github.io/iHUB-Office/iHUB%20Incubator%20Office%20IITR/"
            >
              <img src="/ihub2.jpeg" className="w-80" alt="2nd image" />
            </a>
            <h1 className="text-black text-lg">Incubator Office @ IITR</h1>
          </div>
          <div className="mx-auto my-10 text-center">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://vmyth.github.io/iHUB-Office/iHUB%20Office%20GNEC%20Web/"
            >
              <img src="/ihub3.jpeg" className="w-80" alt="3rd image" />
            </a>
            <h1 className="text-black text-lg">Office @ GNEC IITR</h1>
          </div>
        </div>
        <div className="text-black text-center text-3xl flex items-center justify-center">
          <div>Visit our offices, wherever you are!</div>
        </div>
      </div>
    </div>
  );
};

export default Ihubwalkthrough;
