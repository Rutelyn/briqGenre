import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import briq from "../assets/images/briqHero.png";
import { Link } from "react-router-dom";
import Testimonials from "../assets/components/testimonials";
import Products from "../assets/components/products";
import AboutUs from "../assets/components/aboutUs";


const LandingPage = () => {
  return (

<div>
{/* Hero Section */}
<div id="home" className="flex flex-col overflow-x-hidden h-screen">
  <div className="w-screen relative flex-grow">
    <img 
      src={briq}  
      className="w-full h-screen object-cover" 
      alt="Background" 
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-20 p-4">
      <h1 className="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
      <p className="text-lg mb-6">Lorem ipsum dolor sit amet</p>
      <div className="flex gap-5">
        <Link to="/signup" className="flex items-center text-white bg-[#834d21] py-2 px-4 rounded">
          Get Started
        </Link>
      </div>
    </div>
  </div>
</div>

<AboutUs/>

<Products/>

<Testimonials/>

  </div>
  )
}

export default LandingPage