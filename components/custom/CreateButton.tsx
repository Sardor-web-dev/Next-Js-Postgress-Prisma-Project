"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function CreateButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/posts/new")}
      variant="outline"
      className="cursor-pointer bg-blue-500 text-white hover:text-white font-semibold text-md hover:bg-blue-600 mt-6 w-35 h-10"
    >
      Create New Post
    </Button>
  );
}
