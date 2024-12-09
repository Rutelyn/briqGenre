import ProductsCard from "./productsCard";
import { Link } from "react-router-dom";
import edem from "../images/edem.jpeg";
import esther from "../images/esther.png";


const Products = () => {
  return (
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
  )
}

export default Products