import Category from "./sub-pages/Category";
import HomeHero from "./sub-pages/HomeHero";


const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <Category />
    </div>
  );
};

export default Home;
