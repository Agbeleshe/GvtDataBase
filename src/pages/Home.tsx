import { AboutUs } from "./AboutUs";
import Category from "./sub-pages/Category";
import { HomeHero } from "./sub-pages/HomeHero";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <Category />
      <AboutUs />
    </div>
  );
};

export default Home;
