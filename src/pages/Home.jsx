import Banner from "../components/home/Banner";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import TopPartners from "../components/home/TopPartners";


const Home = () => {
  return (
    <div>
      <Banner />
      <TopPartners />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;