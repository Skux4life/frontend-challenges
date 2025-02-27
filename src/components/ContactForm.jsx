import { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg">
      <h2 className="font-bold mb-4">Send us a message</h2>
      {isSubmitted ? (
        <p>Yay! Thank you for contacting us!</p>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              className="w-full border-2 border-gray-200 rounded-xl p-2 text-xs"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="email">
            <input
              className="w-full border-2 border-gray-200 rounded-xl p-2 text-xs"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="phone">
            <input
              className="w-full border-2 border-gray-200 rounded-xl p-2 text-xs"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
          </label>
          <label className="text-xs text-gray-400">
            Preferred contact method of communication
          </label>
          <div className="text-xs text-gray-400">
            <label className="mr-8" htmlFor="email-pref">
              <input
                className="mr-1 align-sub accent-blue-700"
                type="radio"
                name="pref"
                id="email-pref"
                value="email"
              />
              Email
            </label>
            <label htmlFor="phone-pref">
              <input
                className="mr-1 align-sub accent-blue-600"
                type="radio"
                name="pref"
                id="phone-pref"
                value="phone"
              />
              Phone
            </label>
          </div>
          <label htmlFor="message">
            <textarea
              className="w-full p-2 text-xs border-2 border-gray-200 rounded-xl"
              rows="5"
              type="text"
              name="message"
              id="message"
              placeholder="Message"
            />
          </label>
          <button
            className="mt-8 bg-pink-500 text-gray-100 font-thin py-2 rounded-3xl text-sm hover:bg-pink-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
