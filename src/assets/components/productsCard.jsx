const ProductsCard = ({ image, name, title, text, onButtonClick, link }) => {
    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
       
        <h4 className="text-lg font-semibold text-orange-600">
          {title}
        </h4>
        
       
        <div className="mt-2">
          <img
            alt={title}
            src={image}
            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-cover"
          />
        </div>
  
      
        <div className="text-center">
          <h2 className="mt-2 text-gray-600">
            {name}
          </h2>
          <p className="mt-2 text-orange-600">
            {text}
          </p>
          <button
            onClick={onButtonClick}
            className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Lorem Ipsum {link}
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductsCard;
  