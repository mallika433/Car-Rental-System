import { useState } from "react";
import CarCard from "./CarCard";
import Button from "./Button";
import AddCar from "./AddCar";

import car1 from "../assets/toyotaCorolla.jpeg";
import car2 from "../assets/hondaCivic.jpeg";
import car3 from "../assets/fordMustang.jpeg";
import car4 from "../assets/teslaModel3.jpeg";
import car5 from "../assets/jeepWrangler.jpeg";

export default function CarGrid() {
  const [cars, setCars] = useState([
    {
      id: 1,
      model: "Toyota Corolla",
      type: "Sedan",
      rate: 5000,
      available: true,
      image: car1,
    },
    {
      id: 2,
      model: "Honda Civic",
      type: "Sedan",
      rate: 5500,
      available: false,
      image: car2,
    },
    {
      id: 3,
      model: "Ford Mustang",
      type: "Sports",
      rate: 12000,
      available: true,
      image: car3,
    },
    {
      id: 4,
      model: "Tesla Model 3",
      type: "Electric",
      rate: 15000,
      available: false,
      image: car4,
    },
    {
      id: 5,
      model: "Jeep Wrangler",
      type: "SUV",
      rate: 9000,
      available: true,
      image: car5,
    },
  ]);

  const [isClicked, setIsClicked] = useState(false);

  function handleAddCar() {
    setIsClicked(true);
  }

  function handleCancel() {
    setIsClicked(false);
  }

  function addNewCar(newCar) {
    setCars([...cars, newCar]);
    setIsClicked(false);
  }

  return (
    <>
      {!isClicked && (
        <div className="flex justify-center mb-6">
          <Button text="+ Add New Car" onClick={handleAddCar} />
        </div>
      )}

      {isClicked && (
        <div className="mb-8">
          <AddCar onCancel={handleCancel} onAddCar={addNewCar} />
        </div>
      )}

      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}