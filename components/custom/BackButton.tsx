"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button"

export default function BackButton() {
    const router = useRouter();
  return (
    <Button onClick={() => router.push("/posts")} variant="outline" className="cursor-pointer bg-gray-500 text-white hover:text-white font-semibold text-md hover:bg-gray-600 mt-6 w-20 h-10">
        Back
    </Button>
  )
}

