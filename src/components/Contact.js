const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center m-5">Contact Us</h1>

      <form>
        <div className="flex flex-col border border-orange-900 w-fit mx-auto p-5 my-5 rounded-lg">
          <span className="mb-2">
            <label htmlFor="contactName">Name: </label>
            <input
              type="text"
              id="contactName"
              className="border border-gray-600 rounded-md p-2"
              placeholder="Name"
            ></input>
          </span>
          <span className="mb-2">
            <label htmlFor="contactEmail">Email Id: </label>
            <input
              type="email"
              id="contactEmail"
              className="border border-gray-600 rounded-md p-2"
              placeholder="Email"
            ></input>
          </span>
          <span>
            <label htmlFor="contactTextarea">Message: </label>
            <textarea
              id="contactTextarea"
              className="border border-gray-600 rounded-md p-2"
              placeholder="Text here..."
            ></textarea>
          </span>
          <span>
            <input
              type="submit"
              className="my-3 block mx-auto border bg-slate-700 text-white px-4 py-1 rounded-lg cursor-pointer duration-300 ease-in hover:bg-slate-900 "
            ></input>
          </span>
        </div>
      </form>
    </>
  );
};

export default Contact;
