import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto mt-9">
    
    <div className="flex  flex-col gap-4">
  <div className="skeleton h-48 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>

<div className="flex  flex-col gap-4">
  <div className="skeleton h-48 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>


<div className="flex  flex-col gap-4">
  <div className="skeleton h-48 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>


<div className="flex  flex-col gap-4">
  <div className="skeleton h-48 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>


     </div>

    </div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-md hover:shadow-xl transition h-full">
            <figure className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain"
              />
            </figure>

            <div className="card-body">
              <h2 className="font-semibold line-clamp-2">{product.title}</h2>
              <p className="text-lg font-bold text-primary">${product.price}</p>
              <p className="text-lg font-bold text-primary"> star{product.rating.rate}</p>

              <div className="card-actions mt-3">
                <button className="btn btn-primary btn-sm w-full">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
