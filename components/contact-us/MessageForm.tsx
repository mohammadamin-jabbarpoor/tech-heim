function MessageForm() {
  return (
    <div className="flex-49 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        className="w-full h-12 px-3 border border-gray-400 rounded-lg outline-none"
      />
      <input
        type="text"
        placeholder="Email"
        className="w-full h-12 px-3 border border-gray-400 rounded-lg outline-none"
      />
      <textarea
        placeholder="Message"
        className="w-full h-47.5 px-3 py-3 border border-gray-400 rounded-lg outline-none resize-none"
      />
      <div className="flex justify-end  mt-2">
        <button
          type="button"
          className="w-46 h-12 flex items-center justify-center text-white bg-primary hover:bg-primary-600 rounded-lg cursor-pointer transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default MessageForm;
