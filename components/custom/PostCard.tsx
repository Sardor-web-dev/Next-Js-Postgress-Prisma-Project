"use client";
import { redirect } from "next/navigation";

import { Prisma } from "@/app/generated/prisma/client";

type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true };
}>;

export default function PostCard({ post }: { post: PostWithAuthor }) {
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
