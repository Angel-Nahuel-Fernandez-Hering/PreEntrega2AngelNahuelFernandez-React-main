import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { id, name, price, image };

    addItem(item, quantity);
  };

  return (
    <section className="pt-20 lg:pt-[20px] pb-10 lg:pb-20 mt-5 lg:mt-20 h-full bg-[#F3F4F6] p-4 flex justify-center items-center">
      <div className="overflow-hidden bg-white rounded-lg max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {name}
          </h3>
          <div className="flex justify-center">
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              Price: {price}$
            </p>
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              Stock: {stock}
            </p>
            <p className="leading-relaxed mb-2 text-body-color">
              Category: {category}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="leading-relaxed mr-5 mb-2 text-body-color">
              {description}
            </p>
          </div>
          <div>
            {quantityAdded > 0 ? (
              <div className="mt-5">
                <Link to="/">
                  <svg
                    className="inline mr-2 text-black w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
                <Link to="/cart">
                  <button className="inline-block ml-4 mt-4 rounded-full border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">
                    Go to Cart
                  </button>
                </Link>
              </div>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
