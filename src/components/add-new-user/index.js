"use client";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { addNewUserFormControls } from "@/utils";

export default function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog open={openPopup} onOpenChange={setOpenPopup}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {addNewUserFormControls.map((controlItem) => (
              <div className="mb-5" key={controlItem.name}>
                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  className="col-span-3"
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
