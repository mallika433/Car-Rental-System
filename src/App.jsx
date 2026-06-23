import CarGrid from "./components/CarGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FF] text-[#1F2937]">
      <Navbar />
      <Title />
      <CarGrid />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#2F3A4A] text-white px-8 py-4 flex gap-8 shadow-md">
      <button className="hover:text-[#7AA7FF] transition duration-300">
        Browse Cars
      </button>
      <button className="hover:text-[#7AA7FF] transition duration-300">
        My Bookings
      </button>
      <button className="hover:text-[#7AA7FF] transition duration-300">
        Admin
      </button>
    </nav>
  );
}

function Title() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-[#1F2937]">
        Car Rental System
      </h1>
      <p className="text-[#6B7280] mt-2">
        Smooth rentals with a clean pastel experience
      </p>
    </div>
  );
}