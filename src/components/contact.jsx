import React from "react";
import Title from "./title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center ">
        <form action="https://getform.io/f/agdpzoqb" method="POST" className="flex flex-col w-full md:w-7/12">
        <Title>Contact</Title>
          <input type="text" name="name" placeholder="Name" required className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
          <input type="email" name="email" placeholder="Email" required className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
          <textarea name="message" rows="10" placeholder="Message" required className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none" />

          <button type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;