"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-3 space-x-6 mb-2">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href={"/users/new"}>New-User</Link>
      {status === "loading" && <div>Loading.....</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}{" "}
          <Link href="/api/auth/signout" className="ml-3">
            SignOut
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"}>Login</Link>
      )}
    </div>
  );
};

export default NavBar;
