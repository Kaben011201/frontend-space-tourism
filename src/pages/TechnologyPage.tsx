import { useState } from "react";
import Title from "../components/Title"
import MainLayout from "../layouts/MainLayout"
import data from "../stores/data.json";

const TechnologyPage = () => {
  const technologies = data?.technology;
  const [technologyName, setTechnologyName] = useState<string>("Launch vehicle");
  const selectTechnology = technologies.find((technology) => technology.name === technologyName);
  const handleTechnology = (technologyName: string) => {
    setTechnologyName(technologyName);
  };
  return (
    <MainLayout className="technology-container">
      <Title num="03" title="SPACE LAUNCH 101" />
      <figure className="technology-content">
        <figcaption>
          <nav className="nav-technology">
            {technologies.map((technology, i) => (
              <ul key={technology.name}>
                <li
                  className={`${
                    technology.name === technologyName && "active"
                  }`}
                  onClick={() => handleTechnology(technology.name)}
                >
                  {i + 1}
                </li>
              </ul>
            ))}
          </nav>
          <div className="technology-content-text">
            <p className="tech-content-title">THE TERMINOLOGY...</p>
            <h2 className="tech-name">{selectTechnology?.name}</h2>
            <p className="tech-description">
              {selectTechnology?.description}
            </p>
          </div>
        </figcaption>
        <div className="technology-image">
          <img src={selectTechnology?.images.portrait} alt="" />
        </div>
      </figure>
    </MainLayout>
  );
}

export default TechnologyPage
