import TestimonialsCard from "./testimonialsCard";
import Slider from "react-slick";
import esther from "../images/esther.png";
import edem from "../images/edem.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Testimonials = () => {
  return (
    <div className="p-4 sm:p-10 bg-orange-100">
      <h2 className="text-2xl font-bold text-center mb-6">Testimonials</h2>
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
  );
};

export default Testimonials;
