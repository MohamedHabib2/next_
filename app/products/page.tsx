import React, { Suspense } from "react";
import ProductsCard from "./productsCard";
import Loading from "../loading";
interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}
const Products = async () => {
  const res = await fetch("http://localhost:3000//api/products", {
    cache: "no-store",
  });
  const products: Products[] = await res.json();
  //   console.log(products);
  return (
    <div className="container mx-auto px-4 py-8">
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
      lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <Suspense fallback={<Loading />}>
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
