import AddNewUser from "@/components/add-new-user";
import React from "react";

export default function UserManagement() {
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
    </div>
  );
}
