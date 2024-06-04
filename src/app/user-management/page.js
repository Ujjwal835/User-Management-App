import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default async function UserManagement() {
  const getListOfUsers = await fetchUsersAction();
  console.log(getListOfUsers);
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between gap-4">
        <h1 className="text-xl font-extrabold">User Management</h1>
        <div className="flex justify-center items-center gap-3">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <AddNewUser />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard user={userItem} />
          ))
        ) : (
          <h3>No User Found Please Create One</h3>
        )}
      </div>
    </div>
  );
}
