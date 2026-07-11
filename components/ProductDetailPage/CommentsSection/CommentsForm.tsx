function CommentsForm() {
  const features = [
    { name: "Battery charge", rating: 4.8 },
    { name: "Monitor", rating: 4.9 },
    { name: "Lightness", rating: 4.3 },
  ];

  return (
    <div className="w-1/4">
      <p className="font-light text-lg mb-6">
        leave your comments here for other customers
      </p>
      <div className="flex flex-col gap-3">
        <textarea
          className="h-12 w-full overflow-hidden resize-none rounded-lg border border-gray-500 py-0.5 px-5 text-sm placeholder:whitespace-pre-line focus:h-69 transition-all duration-300"
          placeholder="Share your thoughts about this product here"
        />
        <button className="py-2.5 border-2 border-primary text-primary rounded-lg">
          Comment
        </button>
        <div>
          <p className="font-medium mb-2">Be feature</p>
          {features.map((item) => (
            <div key={item.name} className="flex items-center gap-6">
              <span className="w-22 font-light text-xs">{item.name}</span>

              <div className="h-1 flex-1 rounded-full bg-gray-300">
                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{ width: `${(item.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span className="font-medium">{item.rating}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentsForm;
