import edem from "../assets/images/edem.jpeg";
import esther from "../assets/images/esther.png";
import Slider from "react-slick";
import TestimonialsCard from "../assets/components/testimonialsCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import briq from "../assets/images/briqHero.png";
import { Link } from "react-router-dom";
import ProductsCard from "../assets/components/productsCard";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

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
        <Link to="/signup" className="flex items-center text-white bg-[#10CC9F] py-2 px-4 rounded">
          Get Started
        </Link>
      </div>
    </div>
  </div>
</div>


     {/* About us Section */}     
    <div id="aboutus" className="p-4 sm:p-10 bg-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
        <div className="w-full sm:w-1/3 flex justify-center">
          <img
            src={esther}
            alt="About Us"
            className="rounded-full w-48 h-48 sm:w-60 sm:h-60 object-cover"
          />
        </div>
        <div className="w-full sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisi at iaculis placerat. Morbi ultricies, lorem vel fermentum mattis, arcu libero commodo erat, ac sagittis dui massa quis tellus.
          </p>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        
        <div className="w-full sm:w-2/3">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Services</h1>
          <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisi at iaculis placerat. Morbi ultricies, lorem vel fermentum mattis, arcu libero commodo erat, ac sagittis dui massa quis tellus..
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <img
            src={edem}
            alt="Careers"
            className="rounded-full w-48 h-48 sm:w-60 sm:h-60 object-cover"
          />
        </div>
      </div>
    </div>

{/* Products Section */}
<div
  id="products"
  className="flex flex-col items-center justify-center min-h-screen m-4"
>
  <h1 className="text-2xl font-bold mb-6">Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
    <Link to="/">
      <ProductsCard
        image={edem}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Link>
    <Link to="/">
      <ProductsCard
        image={esther}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Link>
    <Link to="/">
      <ProductsCard
        image={edem}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Link>
    <Link to="/">
      <ProductsCard
        image={esther}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Link>
    <Link to="/">
      <ProductsCard
        image={edem}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </Link>
  </div>
</div>

{/* Testimonials Section */}
<div id="testimonials">
    <div className="p-4 sm:p-10 bg-gray-100 ">
      <Slider {...settings}>
        <div className="text-center">
          <TestimonialsCard image={esther} name="Lorem Ipsum" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisi at iaculis placerat. Morbi ultricies, lorem vel fermentum mattis, arcu libero commodo erat, ac sagittis dui massa quis tellus."
          </p>
        </div>
        <div className="text-center">
          <TestimonialsCard image={edem} name="Lorem Ipsum" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisi at iaculis placerat. Morbi ultricies, lorem vel fermentum mattis, arcu libero commodo erat, ac sagittis dui massa quis tellus."
          </p>
        </div>
        <div className="text-center">
          <TestimonialsCard image={esther} name="Lorem Ipsum" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisi at iaculis placerat. Morbi ultricies, lorem vel fermentum mattis, arcu libero commodo erat, ac sagittis dui massa quis tellus."
          </p>
        </div>
        <div className="text-center">
          <TestimonialsCard image={edem} name="Lorem Ipsum" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus nisi at iaculis placerat. Morbi ultricies, lorem vel fermentum mattis, arcu libero commodo erat, ac sagittis dui massa quis tellus."
          </p>
        </div>
      </Slider>
    </div>
  
  </div>

    </div>
  )
}

export default LandingPage