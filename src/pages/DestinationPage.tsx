import { useState } from "react";
import data from "../stores/data.json";
import Title from "../components/Title";
import MainLayout from "../layouts/MainLayout";

const DestinationPage = () => {
  const destinations = data.destinations;

  const [destinationName, setDestinationName] = useState<string>("Moon");

  const selectDestination = destinations.find(
    (destination) => destination.name === destinationName
  );

  const handleDestination = (destinationName: string) => {
    setDestinationName(destinationName);
  };
  return (
    <MainLayout className="destination-container">
      <Title num="01" title="PICK YOUR DESTINATION" />
      <figure className="destination-content">
        <div className="destination-image">
          <img src={selectDestination?.images.png} alt={destinationName} />
        </div>
        <figcaption>
          <nav className="nav-destination">
            {destinations.map((destination) => (
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
          </nav>
          <div className="destination-content-text">
            <h2>{selectDestination?.name}</h2>
            <p>{selectDestination?.description}</p>
          </div>
          <hr/>
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
