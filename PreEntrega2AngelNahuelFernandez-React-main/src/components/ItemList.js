import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <section className="pt-2 pb-10 h-full bg-[#F3F4F6] px-5 mt-10">
      <div className="flex justify-center">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 mt-12">
          {products.map((prod) => (
            <Item key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
