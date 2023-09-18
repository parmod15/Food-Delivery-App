const Contact = () => {
  return (
    <div className="font-poppins">
      <h1 className="text-5xl font-bold text-center my-12">CONTACT US </h1>

      <form className=" flex flex-col gap-4 w-5/12 mx-auto">
        <input
          className=" border-2 border-blue-500 py-2 rounded-md"
          type="text"
          placeholder="Your Name"
        ></input>
        <input
          className="border-2 border-blue-500 py-2 rounded-md"
          type="text"
          placeholder="Your E-mail"
        ></input>
        <textarea
          className="border-2 border-blue-500 py-2 rounded-md"
          placeholder="Your Message"
          rows={5}
          cols={20}
        ></textarea>
        <button className="py-2 px-16 bg-green-500 w-52 rounded-lg text-white">
          Send Your Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
