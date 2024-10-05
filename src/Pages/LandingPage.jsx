import React from "react";
import Navbar from "../Components/Navbar";
import HeaderButton from "../ui/HeaderButton";
import CenteredButton from "../ui/CenteredButton";
import ServicesGrid from "../Components/ServicesGrid";
import ProfilesGrid from "../Components/ProfilesGrid";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

const LandingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="first-div flex px-[40px] py-[40px] md:gap-2 lg:gap-48 bg-[#f5f5f5]">
        <div className=" flex-1">
          <HeaderButton className="font-bold">
            ON DEMAND SERVICE PLATFORM
          </HeaderButton>
          <h1 className="mt-[10px] text-[25px] leading-[38px] md:leading-[60px] md:text-[48px] text-[#000000] font-bold">
            GROW YOUR <br /> BUSINESS WITH OUR <br /> PLATFORM
          </h1>
          <p className="text-[13px] md:text-[16px] font-normal text-[-#000000]">
            Connect with more clients, streamline your services and watch your{" "}
            <br /> business thrive. Join a commuinity of professionals, gain
            more exposure and <br /> drive your business forward.
          </p>
          <div className="flex  mt-5">
            <input
              type="text"
              placeholder="I need help with ........."
              className="w-full bg-[url('./Assets/search.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat bg-[#edebea] py-5 px-10  h-6  border-none"
            />
            <CenteredButton className="whitespace-nowrap px-6 text-[16px] font-bold">
              Get Started
            </CenteredButton>
          </div>
        </div>
        <div className=" first-div-image bg-[url('./Assets/firstimage.svg')] bg-no-repeat  justify-end md:flex-1"></div>
      </div>
      {/* over 1.1 milloin reviews */}
      <div className=" flex flex-col gap-3 md:flex-row md:justify-between md:items-center px-[40px] py-[20px] bg-[#0d47a1]">
        <div>
          <p className="font-bold text-[24px] text-white">
            Over 1.1 Million Reviews
          </p>
          <p className="text-[16px] text-white font-normal">
            In Cleaning, Home Repairs and Planning{" "}
          </p>
        </div>
        <div className="flex">
          <img src="./Assets/Link_margin.svg" alt="" />
          <img src="./Assets/SVG (2).svg" alt="" />
        </div>
      </div>
      {/* 3rd div */}
      <div className="px-[40px] flex flex-col gap-20  lg:flex-row mt-[70px]">
        <div className="mt-10">
          <HeaderButton>WHY JOIN US</HeaderButton>
          <h2 className="mt-[10px] text-[30px] leading-[48px] text-[#000000] font-bold md:whitespace-nowrap ">
            UNLOCK YOUR PROFESSIONAL <br /> POTENTIAL
          </h2>
          <p className="mt-[10px] text-[16px] font-normal text-[-#000000]">
            Connect with more clients, enjoy a flexible schedule, secure <br />
            reliable payments, and grow your business with our dedicated <br />
            support and resources.
          </p>
          <div className=" flex gap-5 mt-[40px]">
            <CenteredButton className="whitespace-nowrap px-1 md:px-6 text-[10px] md:text-[16px] font-bold">
              Sign up Now
            </CenteredButton>
            <CenteredButton className="whitespace-nowrap px-1 md:px-6 text-[10px] md:text-[16px] font-bold">
              Learn more
            </CenteredButton>
          </div>
        </div>
        {/* second section in the 3rd div */}
        <div className="flex flex-col w-full m-auto md:m-0 md:flex-row gap-7  ">
          <div className="mt-[70px] px-[10px] md:px[0px]">
            <div className="flex justify-center items-center gap-10 md:gap-10 mb-6 md:mb-0">
              <img src="./Assets/one.svg" alt="" />
              <div>
                <h1 className="text-[24px] font-semibold whitespace-nowrap">
                  Expand Your Reach
                </h1>
                <p className="text-[16px] text-left md:text-right">
                  Access a{" "}
                  <span className="text-[#1a73ea]">
                    large and growing <br />
                    client base
                  </span>{" "}
                  actively seeking <br /> professional services
                </p>
              </div>
            </div>
            <img
              src="./Assets/Line.svg"
              alt=""
              className="hidden md:flex my-[20px] md:my-[50px] ml-24"
            />
            <div className="flex justify-center items-center gap-10 md:gap-10">
              <img src="./Assets/two.svg" alt="" />
              <div>
                <h1 className="text-[24px] font-semibold whitespace-nowrap">
                  Secure Payments
                </h1>
                <p className="text-[16px] text-left">
                  Our
                  <span className="text-[#1a73ea]">
                    secure payment <br />
                  </span>{" "}
                  system ensure you get <br /> paid on time, every time
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="./Assets/Line 3.svg"
              alt=""
              className="hidden md:flex h-[450px]"
            />
          </div>
          <div className="  ">
            <div className=" flex justify-center items-center gap-10 md:gap-10  mb-6 md:mb-0">
              <img src="./Assets/three.svg" alt="" />
              <div>
                <h1 className="text-[24px] font-semibold whitespace-nowrap">
                  Flexible Schedule
                </h1>
                <p className="text-[16px] text-left">
                  <span className="text-[#1a73ea]">Choose when and where</span>{" "}
                  <br /> you want to work. Accept <br />
                  jobs that fit your schedule.
                </p>
              </div>
            </div>
            <img
              src="./Assets/Line.svg"
              alt=""
              className=" hidden md:flex my-[20px] md:my-[50px]  "
            />
            <div className=" flex justify-center items-center gap-10 md:gap-10">
              <img src="./Assets/four.svg" alt="" className="" />
              <div>
                <h1 className="text-[24px] font-semibold whitespace-nowrap">
                  Dedicated Support
                </h1>
                <p className="text-[16px] text-left">
                  Our
                  <span className="text-[#1a73ea]">support team</span> is <br />
                  available to help you with <br /> any questions or issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <img src="./Assets/Group 128.svg" alt="" className="mt-5 mx-auto" />

      <HeaderButton className="mt-[70px] mx-10 text-[18px] font-normal">
        POPULAR SERVICES
      </HeaderButton>
      <ServicesGrid />
      <HeaderButton className=" mx-10 text-[18px] font-normal mt-4 whitespace-nowrap">
        REAL STORIES, REAL IMPACT
      </HeaderButton>
      <ProfilesGrid />
      <div className="w-full  flex flex-col m-auto md:flex-row lg:px-[200px] mt-14 px=[40px]">
        <img src="./Assets/Frame (6).svg" alt="" className="h-[500px] flex-1" />
        <div className="flex-col flex-1">
          <HeaderButton className="mb-[20px] ml-3 md:ml-0">
            Frequently asked questions
          </HeaderButton>
          <Accordion className="flex-1" />
        </div>
      </div>
      <div className="bg-[#e3f2fd]">
        <p className="font-semibold text-[16px] text-[#1a73ea] py-5 px-10">
          Special Offer
          <h1 className="text-center font-bold text-[#000000] text-[28px] md:text-[48px] leading-[30px] md:leading-[48px] pb-10 pt-2">
            Get a bonus for your first 5 <br /> completed task
          </h1>
          <CenteredButton className="flex justify-center items-center m-auto">
            Sign up Now!!
          </CenteredButton>
        </p>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
