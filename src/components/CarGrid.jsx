import CarCard from "./CarCard";

import car1 from "../assets/toyotaCorolla.jpeg";
import car2 from "../assets/hondaCivic.jpeg";
import car3 from "../assets/fordMustang.jpeg";
import car4 from "../assets/teslaModel3.jpeg";
import car5 from "../assets/jeepWrangler.jpeg";

export default function CarGrid() {
  const cars = [
    {
      id: 1,
      model: "Toyota Corolla",
      type: "Sedan",
      rate: 50,
      available: true,
      image: car1,
    },
    {
      id: 2,
      model: "Honda Civic",
      type: "Sedan",
      rate: 55,
      available: false,
      image: car2,
    },
    {
      id: 3,
      model: "Ford Mustang",
      type: "Sports",
      rate: 120,
      available: true,
      image: car3,
    },
    {
      id: 4,
      model: "Tesla Model 3",
      type: "Electric",
      rate: 150,
      available: false,
      image: car4,
    },
    {
      id: 5,
      model: "Jeep Wrangler",
      type: "SUV",
      rate: 90,
      available: true,
      image: car5,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}