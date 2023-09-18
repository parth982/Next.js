import { Suspense } from "react";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1 className="font-bold">Main Users Page</h1>
      <Suspense fallback={<p>Loading Table...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
