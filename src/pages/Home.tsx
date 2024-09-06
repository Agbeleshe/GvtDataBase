import { AboutUs } from "./AboutUs";
import Footer from "./Footer";
import Gap  from "./Gap";
import ServiceDetails from "./ServiceDetails";
import Category from "./sub-pages/Category";
import { HomeHero } from "./sub-pages/HomeHero";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <ServiceDetails />
      <Gap />
      <Category />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
