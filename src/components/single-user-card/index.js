"use client";

import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import { UserContext } from "@/context";

export default function SingleUserCard({ user }) {
  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } =
    useContext(UserContext);

  async function handleDelete(getCurrentUserID) {
    const result = await deleteUserAction(getCurrentUserID, "/user-management");
    console.log(result);
  }

  function handleEdit(getCurrentUser) {
    setOpenPopup(true);
    setAddNewUserFormData({
      firstName: getCurrentUser.firstName,
      lastName: getCurrentUser.lastName,
      email: getCurrentUser.email,
      address: getCurrentUser.address,
    });
    setCurrentEditedID(getCurrentUser?._id);
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>{user?.address}</CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => handleEdit(user)}>Edit</Button>
        <Button onClick={() => handleDelete(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
