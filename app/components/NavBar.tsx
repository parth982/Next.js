import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-3 space-x-6 mb-2">
      <Link href={"/"}>Next.js</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/users/new"}>New-User</Link>
    </div>
  );
};

export default NavBar;
