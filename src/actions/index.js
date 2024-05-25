"use server";

import connectToDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// add new user action
export async function addNewUserAction(formData, pathToRevalidate) {
  await connectToDB();
  try {
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User added Successfully",
      };
    } else {
      return {
        success: false,
        message: "Some Error Occurred Please try again later",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some Error Occurred Please try again later",
    };
  }
}

// fetch users action
export async function fetchUsersAction() {
  await connectToDB;
  try {
    const listOfUsers = await User.find({});
    if (listOfUsers) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
      };
    } else {
      return {
        success: false,
        message: "Something Went Wrong",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong please try again",
    };
  }
}

// edit user action
export async function editUserAction(
  currentUserID,
  formData,
  pathToRevalidate
) {
  await connectToDB;
  try {
    const { firstName, lastName, email, address } = formData;
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: currentUserID,
      },
      {
        firstName,
        lastName,
        email,
        address,
      },
      { new: true }
    );
    if (updatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User Updated Successfully",
      };
    } else {
      return {
        success: false,
        message: "Not able to update user please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something Went Wrong Please try again later",
    };
  }
}

// delete user action
export async function deleteUserAction(currentUserID, pathToRevalidate) {
  await connectToDB;
  try {
    const deletedUser = await User.findByIdAndDelete(currentUserID);
    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "user Deleted Successfully",
      };
    } else {
      return {
        success: false,
        message: "Not able to perform delete operation please try again later",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something Went Wrong Please try again later",
    };
  }
}
