"use client";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>NewUserPage</h1>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Go-Back
      </button>
    </div>
  );
};
export default NewUserPage;
