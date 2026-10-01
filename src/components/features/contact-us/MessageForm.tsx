function MessageForm() {
  return (
    <div className="lg:w-1/2 xl:flex-49 flex flex-col gap-2 lg:gap-4">
      <input
        type="text"
        placeholder="Your name"
        className="w-full h-10 lg:h-12 px-3 border border-gray-400 rounded-lg outline-none"
      />
      <input
        type="text"
        placeholder="Email"
        className="w-full h-10 lg:h-12 px-3 border border-gray-400 rounded-lg outline-none"
      />
      <textarea
        placeholder="Message"
        className="w-full h-20.5 md:h-29.5 lg:h-28.5 xl:h-47.5 px-3 py-3 border border-gray-400 rounded-lg outline-none resize-none"
      />
      <div className="flex justify-end  mt-2">
        <button
          type="button"
          className="w-37 md:40 lg:w-43 xl:w-46 h-10 lg:h-12 flex items-center justify-center text-white bg-primary hover:bg-primary-600 rounded-lg cursor-pointer transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default MessageForm;
