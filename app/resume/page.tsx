import MagicButton from "@/components/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";
import { IoCloudDownloadOutline, IoHomeOutline } from "react-icons/io5";

const ResumePage = () => {
  return (
    <div>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      <div className="z-30">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-20 top-28 h-[80vh] w-[20vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative bg-black-100">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}

          <TextGenerateEffect
            words="My Resume"
            className="text-center text-[40px] md:text-4xl lg:text-4xl mb-10 mt-8"
          />

          <img
            src="/Kyada_Pavan_Resume.jpg"
            alt="Pavan_Kyada_Resume"
            className="mb-12 z-40 shadow-[0px_1px_11px_3px_#a3bffa]"
          />

          <div className="mb-20 flex gap-4">
            <a href="/">
              <MagicButton
                title="Back to Home"
                icon={<IoHomeOutline />}
                position="right"
              />
            </a>
            <a download href="/Kyada_Pavan_Resume.pdf">
              <MagicButton
                title="Download"
                icon={<IoCloudDownloadOutline />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
