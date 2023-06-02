import { notFound } from "next/navigation";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import React from "react";
import { Metadata } from "next";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  params: {
    postID: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => {
    return { postId: post.id };
  });
}

export function generateMetadata({ params: { postID } }: Props): Metadata {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === postID);
  if (!post) {
    return {
      title: "Page Not Found :(",
    };
  }
  return {
    title: `${post.title}`,
  };
}

export default async function page({ params: { postID } }: Props) {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === postID);
  if (!post) notFound();
  const { title, date, id, contentHtml } = await getPostData(postID);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-invert text-white mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section
          className="text-white"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p>
          <Link className="text-white" href="/">
            ⬅️ Back to Home
          </Link>
        </p>
      </article>
    </main>
  );
}
