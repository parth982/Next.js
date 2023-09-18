import Link from "next/link";
import ProductCart from "./components/ProductCard/ProductCart";

export default function Home() {
  return (
    <main>
      <h1>Root Route Page</h1>
      <Link href={"/users"}>
        <button className="btn btn-secondary">Users</button>
      </Link>
      <ProductCart />
    </main>
  );
}
