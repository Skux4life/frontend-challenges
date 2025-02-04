import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-amber-800 grid grid-cols-1 lg:grid-cols-2 m-8 p-8 lg:m-48 lg:py-24 px-12 gap-24">
      <div className="">
        <h1 className="text-4xl text-white font-mono mb-8">Contact Us</h1>
        <p className="text-gray-200 leading-loose font-thin">
          Get in touch with us! Whether you have questions, feedback, or just
          want to say hello, we're here for you.
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
