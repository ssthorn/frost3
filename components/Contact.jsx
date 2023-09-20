import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div id='contact'>
      <div className='w-full text-center'>
        {/* <h1 className='px-2 mb-2 mt-0 text-6xl font-extrabold leading-tight'>
          Contact
        </h1> */}
      </div>
      <div class='max-w-4xl mx-auto bg-base-100 shadow-xl p-6'>
        <h2 class='md:text-6xl text-4xl font-extrabold text-center mb-4'>Contact Us</h2>
        <form action='#' method='POST'>
          <div class='mb-4'>
            <label for='name' class='block font-medium'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              class='w-full px-4 py-2'
              required
            ></input>
          </div>
          <div class='mb-4'>
            <label for='email' class='block font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              class='w-full px-4 py-2'
              required
            ></input>
          </div>
          <div class='mb-4'>
            <label for='message' class='block font-medium'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              class='w-full px-4 py-2 '
              rows='4'
              required
            ></textarea>
          </div>
          <div class='text-center'>
            <button
              type='submit'
              class='btn btn-neutral hover:btn-accent'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
