import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout className="home-container">
        <div className="home-text">
          <p className="pre-question">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="last-question">SPACE</h1>
          <p className="description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-container">
          <button className="explore-btn">EXPLORE</button>
        </div>
    </MainLayout>
  );
};

export default HomePage;
