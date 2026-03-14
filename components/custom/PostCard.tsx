"use client";
import { Post } from "@/app/generated/prisma/client";
import { redirect } from "next/navigation";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <span
        onClick={() => redirect(`/posts/${post.id}`)}
        className="font-semibold cursor-pointer"
      >
        {post.title}
      </span>
      <span className="text-sm text-gray-600 ml-2">by {post.author.name}</span>
    </div>
  );
}
