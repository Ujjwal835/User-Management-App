import { fetchListOfProducts } from "@/actions";

export default async function ServerActionsExample() {
  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1>Server Actions Examples</h1>
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
