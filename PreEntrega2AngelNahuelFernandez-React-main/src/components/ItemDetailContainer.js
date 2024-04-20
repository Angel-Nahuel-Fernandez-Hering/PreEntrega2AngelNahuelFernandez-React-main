import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../db/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      <h1
        className={`text-center py-4 text-5xl bg-[#F3F4F6] ${
          loading ? "" : "hidden"
        }`}
      >
        LOADING PRODUCT
      </h1>
      <div className={`my-5 flex justify-center ${loading ? "" : "hidden"}`}>
        <BarLoader color="#111312" height={7} width={100} className="my-5" />
      </div>
      <div className={`${loading ? "hidden" : ""}`}>
        <ItemDetail {...product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
