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
      <div class='max-w-md mx-auto bg-base-100 shadow-xl p-6'>
        <h2 class='text-6xl font-extrabold text-center mb-4'>Contact Us</h2>
        <form action='#' method='POST'>
          <div class='mb-4'>
            <label for='name' class='block text-gray-600 font-medium'>
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
            <label for='email' class='block text-gray-600 font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              class='w-full px-4 py-2 border'
              required
            ></input>
          </div>
          <div class='mb-4'>
            <label for='message' class='block text-gray-600 font-medium'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              class='w-full px-4 py-2 border '
              rows='4'
              required
            ></textarea>
          </div>
          <div class='text-center'>
            <button
              type='submit'
              class='px-6 py-3 btn btn-primary'
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
