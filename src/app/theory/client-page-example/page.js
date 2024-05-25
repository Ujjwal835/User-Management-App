"use client";

import { fetchListOfProducts } from "@/actions";
import React, { useEffect, useState } from "react";

export default function ClientPageExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();
    console.log(data);
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  if (loading) {
    return <h1>Loading Data</h1>;
  }

  return (
    <div>
      <h1>ClientPage Server Example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li className="py-2">{item.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}
