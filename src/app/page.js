import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-extrabold py-48 px-24">
        This is the Home Page for User Management System
      </h1>
      <Link href="/user-management">
        <Button>User Management</Button>
      </Link>
    </div>
  );
}
