import React from "react";
import howitworks1 from "../assets/images/howitworks1.png";
import howitworks2 from "../assets/images/howitworks2.jpg";

function HowItWorksPage() {
  return (
    <div className="bg-white h-100 2xl:p-0 pb-20">
      <div className="bg-secondary md:p-20 sm:p-10 px-4 py-10">
        <div className="font-bold sc-font-30 text-color-third mb-4">Searching</div>
        <div className="md:flex">
          <div className="md:w-1/2 w-full">
            <div className="max-w-full text-color-secondary sc-font-lg font-primary md:pr-4">
              Searching in Sourcer is super simple! The search box is always at the top of the screen. Just type in
            keywords related to whatever you’re looking for.</div>
          </div>
          <div className="md:w-1/2 w-full">
            <img className="m-auto mt-8 md:m-0 object-contain" src={howitworks1} style={{ height: "43px" }}></img>
          </div>
        </div>
      </div>

      <div className="md:p-20 sm:p-10 px-4 py-10 xl:flex  items-center">
        <div className="xl:w-1/2 w-full">
          <div className="font-bold sc-font-30 text-color-third mb-4">
            Sourcer will return a list of related Topics.
          </div>
          <div className="mb-4 text-color-secondary sc-font-lg font-primary">
            You can click on any of these to see Citations related to that topic.
          </div>
          <div className="text-color-secondary sc-font-lg font-primary ">
            Both Topics and Citations have “share” icons next to them. Just click for quick and easy sharing!
          </div>
        </div>
        <div className="xl:w-1/2 w-full">
          <img className="object-contain m-auto mt-8 xl:m-0" src={howitworks2} style={{ width: "600px" }}></img>
        </div>
      </div>
      <div className="bg-secondary md:p-20 sm:p-10 px-4 py-10">
        <div className="font-bold sc-font-30 text-color-third mb-4">My Sourcer</div>
        <div className="text-color-secondary sc-font-lg font-primary ">
          If you want to save a Topic or a Citation for later, just click the star icon next to it. This will add it to
          your favorites. You can view your favorites on the My Sourcer page.
        </div>
      </div>
      <div className="md:p-20 sm:p-10 px-4 py-10">
        <div className="font-bold sc-font-30 text-color-third mb-4">Contribute</div>
        <div className="text-color-secondary sc-font-lg font-primary ">
          <div className="mb-4">
            Adding your own Citations is quick and easy. When you click on Contribute, you’ll be asked to choose or
            create a Topic. You can search to see if the Topic you’re looking for already exists. If not, Sourcer will
            create it for you.
          </div>
          <div className="mb-4">
            Once you’ve selected your topic, just add the link to your Citation. Sourcer will try to find a title,
            description and image from that web page. Once Sourcer has pulled that information from the source, you
            should feel free to edit it to explain the source better to other users. When you’re done, just click “add
            citation”.
          </div>
          <div className=" ">
            Once you’ve submitted your citation it will be submitted for review. Once approved, your citation will be
            available to the public. You will always be able to see your sources on your My Sourcer page.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
