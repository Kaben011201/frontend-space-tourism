import Title from "../components/Title";
import data from "../stores/data.json";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

const CrewPage = () => {
  const crews = data.crew;
  const [crewName, setCrewName] = useState<string>("Douglas Hurley");
  const selectCrew = crews.find((crew) => crew.name === crewName);

  const handleCrew = (crewName: string) => {
    setCrewName(crewName);
  };
  return (
    <MainLayout className="crew-container">
      <Title num="02" title="Meet your crew" />
      <figure className="crew-content">
        <figcaption>
          <div className="crew-content-text">
            <div>
              <p className="role">{selectCrew?.role}</p>
              <h2 className="name">{selectCrew?.name}</h2>
              <p className="bio">{selectCrew?.bio}</p>
            </div>
          </div>
          <nav className="nav-crew">
            {crews.map((crew) => (
              <ul
                key={crew.name}
              >
                <li
                  className={`${crew.name === crewName && "active"}`}
                  onClick={() => handleCrew(crew.name)}
                >
                  <span className="circle">&#9679;</span>
                </li>
              </ul>
            ))}
          </nav>
        </figcaption>
        <div className="crew-image">
          <img src={selectCrew?.images.webp} alt={crewName} />
        </div>
      </figure>
    </MainLayout>
  );
};

export default CrewPage;
