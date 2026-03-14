import PostCard from "@/components/custom/PostCard";
import prisma from "@/lib/prisma";
import CreateButton from "@/components/custom/CreateButton";
import  Link  from "next/link";

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16 text-[#333333]">
      <Link href="/" className="text-gray-600 text-xl font-bold mb-10 hover:text-gray-800">
        Go Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 font-(family-name:--font-geist-sans)">
        Posts
      </h1>
      <div className="font-(family-name:--font-geist-sans) max-w-2xl space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <CreateButton />
    </div>
  );
}
