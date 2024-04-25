/* eslint-disable jsx-a11y/img-redundant-alt */
// src/App.js

import React, { useState } from "react";
import axios from "axios";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const RegistrationForm = () => {
  const imageURL = "/heroImage.jpg";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    uiux_design: false,
    data_analysis: false,
    reason: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      uiux_design: false,
      data_analysis: false,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://women-in-tech-vfbw.onrender.com/api/v1/register/",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center text-[#26225D] font-semibold bg-white h-[69px] py-2 px-6 justify-between">
        <img
          src="logo.png"
          alt="Header Image"
          className="w-[100px] filter blur-[1px]"
        />
        <a
          href="https://paritie.com/paritie-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>About Us</span>
        </a>
      </div>
      <div className="min-h-screen flex-col">
        {/* <header className="">
      
      <img
        src="heroImage.jpg"
        alt="Header Image"
        className="max-w-full filter blur-[1px]"
      />
    </header> */}
        <div className="flex justify-center  max-w-full  ">
          <div
            className="relative bg-cover bg-center min-w-full h-[720px] p-4 inset-0 backdrop-blur-sm px-8"
            // style={{ backgroundImage: `url(${imageURL})` }}
          >
            <img
              src="./heroImage.jpg"
              alt="Background Image"
              class="absolute inset-0 w-full h-full object-cover blur-sm"
            />
            <div className="relative lg:flex-col  lg:pt-[74px]  lg:w-[600px] lg:float-end lg:mr-9">
              <h1 className="text-[#F0B343]  leading-[43px] font-semibold text-[36px] p-4 lg:text-right lg:pl-40 lg:min-w-[644px] ">
                An exclusive program for females.
              </h1>
              <p className="text-white  text-[60px] leading-[77.45px] font-extrabold lg:text-right  lg:pl-40 lg:min-w-[644px] ">
                Bootcamp with Paritie Learning Group.{" "}
              </p>
              <p className="text-white font-medium text-[24px] leading-7 lg:text-justify lg:min-w-[644px] ">
                Join our free boot camp empowering young girls. Exclusively for
                females, it nurtures the next generation of women. Registration
                is free, sign up now!
              </p>
            </div>
          </div>
        </div>
        <main className="min-w-md  p-4 sm:border-4 sm:border-[#26225D] rounded-lg mt-5 md:max-w-[672px] md:mx-auto lg:max-w-[1312px]">
          <form
            onSubmit={handleSubmit}
            id="registration-form"
            className="space-y-4  md:px-9 lg:max-w-[920px] lg:rounded-xl lg:gap-6 lg:mx-auto "
          >
            <div className="m-10">
              <h1 className="text-2xl font-bold text-[#26225D] text-center">
                Registeration
              </h1>
            </div>
            <div className="lg:mt-9 lg:items-end lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstname"
                  className="font-semibold lg:font-bold"
                >
                  First Name
                </label>
                <input
                  name="first_name"
                  type="text"
                  id="firstname"
                  className="w-full p-2 border rounded"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastname"
                  className="font-semibold  lg:font-bold"
                >
                  Last Name
                </label>
                <input
                  name="last_name"
                  onChange={handleChange}
                  type="text"
                  id="lastname"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-semibold  lg:font-bold">
                  Email Address
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="space-y-2 w-[100px]">
                <label htmlFor="age" className="font-semibold  lg:font-bold">
                  Age
                </label>
                <input
                  name="age"
                  onChange={handleChange}
                  type="number"
                  id="age"
                  className="w-32 p-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="flex-col">
              <div className="">
                <label className="font-semibold  lg:font-bold">Courses</label>
                <div className="flex items-center space-x-2">
                  <input
                    checked={formData.uiux_design}
                    name="uiux_design"
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    id="course1"
                    value="uiux_design"
                    className="accent-[#26225D]"
                  />
                  <label htmlFor="course1">Ui/Ux Design</label>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    checked={formData.data_analysis}
                    name="data_analysis"
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    id="course2"
                    value="data_analysis "
                    className="accent-[#26225D]"
                  />
                  <label htmlFor="course2">Data Analysis</label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="interest" className="font-semibold  lg:font-bold">
                Why are you interested in this program?
              </label>
              <textarea
                required
                name="reason"
                onChange={handleChange}
                id="interest"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <div className="flex justify-center py-5">
              <button
                type="submit"
                className="bg-[#26225D]  text-white py-2 px-4 rounded"
              >
                Join Now
              </button>
            </div>
          </form>
        </main>
        <footer className="flex-col p-6 md:px-9 gap-6  ">
          <div className="gap-6 lg:flex lg:justify-between lg:max-w-[1312px] lg:mx-auto">
            <div className="flex-col py-6 gap-6 ">
              <h1 className="gap-6 font-semibold items-start justify-start text-[40px] leading-10  ">
                Contact Us
              </h1>
              <p className="font-light text-[24px] leading-7 py-4 ">
                +234 817 624 1972
              </p>
              <p className="font-light text-[24px] leading-7 ">
                info@paritie.com
              </p>
            </div>
            <div className="py-6">
              <h2 className="gap-6 font-semibold items-start justify-start text-[40px] leading-10 ">
                Social Media
              </h2>
              <div className="flex gap-4 lg:justify-between mt-4">
                <a
                  href="https://www.facebook.com/paritiehub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook color="#26225D" size={40} />
                </a>
                <a
                  href="https://twitter.com/paritiehub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter color="#26225D" width={40} size={40} />
                </a>
                <a
                  href="https://www.instagram.com/paritiehub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram color="#26225D" width={40} size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/company/paritieltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin color="#26225D" width={40} size={40} />
                </a>
                <a
                  href="https://youtube.com/@paritieltd?si=S9gGqi9d239gqklJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube color="#26225D" size={40} />
                </a>
              </div>
            </div>
            <div className="py-6 lg:w-[421px]">
              <h2 className="gap-6 font-semibold items-start justify-start text-[40px] leading-10 py-2 ">
                Office
              </h2>
              <span className="px-auto pt-6 font-light leading-6 text-[20px] ">
                Suite C1, Peniel Albarka Plaza, Opp. Federal Highcourt, Minna,
                Niger State.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RegistrationForm;
