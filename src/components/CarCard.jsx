export default function CarCard({ car }) {
    return (
      <div className="w-72 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-4 hover:shadow-lg transition duration-300">
  
        {/* Image */}
        <div className="h-40 rounded-xl mb-4 overflow-hidden">
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
  
        {/* Title */}
        <h2 className="text-xl font-bold text-[#1F2937]">
          {car.model}
        </h2>
  
        <p className="text-[#6B7280]">
          Type: {car.type}
        </p>
  
        {/* Price */}
        <p className="text-lg font-bold text-[#4F86FF] mt-2">
          Rs.{car.rate}/day
        </p>
  
        {/* AVAILABILITY BADGE */}
        <div className="mt-3">
          {car.available ? (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-[#E8F8F3] text-[#1F9D7A] border border-[#7DD3C0]">
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-[#FDECEC] text-[#E54848] border border-[#FCA5A5]">
              Rented
            </span>
          )}
        </div>
  
        {/* BOOK BUTTON */}
        <button
          disabled={!car.available}
          className={`mt-4 w-full py-2 rounded-lg font-medium transition duration-300 shadow-sm ${
            car.available
              ? "bg-[#4F86FF] text-white hover:bg-[#3B73F0] hover:scale-[1.02]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {car.available ? "Book Now" : "Not Available"}
        </button>
      </div>
    );
  }