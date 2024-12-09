
import edem from "../images/edem.jpeg";
import esther from "../images/esther.png";

const AboutUs = () => {
  return (
    <div id="aboutus" className="p-4 sm:p-10 bg-orange-100">
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
  )
}

export default AboutUs