import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import data from "../stores/data.json";

const DestinationPage = () => {
  const destination = data.destinations;

  const [destinationName, setDestinationName] = useState<string>("Moon");

  const selectDestination = destination.find(
    (destination) => destination.name === destinationName
  );

  const handleDestination = (destinationName: string) => {
    setDestinationName(destinationName);
  };
  return (
    <MainLayout className="destination-container">
      <h1>
        <span>01</span>PICK YOUR DESTINATION
      </h1>
      <figure className="destination-content">
        <div className="destination-image">
          <img src={selectDestination?.images.png} alt={destinationName} />
        </div>
        <figcaption>
          <div className="nav-destination">
            {destination.map((destination) => (
              <ul key={destination.name}>
                <li
                  className={`${
                    destination.name === destinationName && "active"
                  }`}
                  onClick={() => handleDestination(destination.name)}
                >
                  {destination.name}
                </li>
              </ul>
            ))}
          </div>
          <div className="destination-content-text">
            <h2>{selectDestination?.name}</h2>
            <p>{selectDestination?.description}</p>
          </div>
          <hr />
          <div className="destination-info">
            <div className="destination-info-text">
              <h3>AVG. DISTANCE</h3> <p>{selectDestination?.distance}</p>
            </div>
            <div className="destination-info-text">
              <h3>EST. TRAVEL TIME</h3> <p>{selectDestination?.travel}</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </MainLayout>
  );
};

export default DestinationPage;
