import Link from "next/link";
import ProductCart from "./components/ProductCard/ProductCart";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href={"/users"}>
        <button className="btn btn-secondary">Users</button>
      </Link>
      <ProductCart />
    </main>
  );
}
