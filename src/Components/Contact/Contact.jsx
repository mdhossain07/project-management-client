const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-purple-500 to-pink-500 container mx-auto px-8 md:px-16 lg:px-24 py-16"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ">
        <div className="w-full lg:w-1/2">
          <h2 className="text-white font-semibold text-4xl">
            Got Questions?
            <br />
            Lets Figure this out together
          </h2>
          <br />
        </div>

        <div className="w-full lg:w-[420px]">
          <h2 className="text-white font-semibold mb-5 text-4xl">
            Contact with Us
          </h2>
          <form className="mt-10">
            <div className="mb-5">
              <input
                type="text"
                id="name"
                name="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-5">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
