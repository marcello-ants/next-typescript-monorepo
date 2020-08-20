import React from "react";
import Link from "next/link";
// import { Layout } from "../../components";

export async function getStaticProps(context) {
  return {
    props: {
      posts: [
        { id: 1, title: "First blog post" },
        { id: 2, title: "Second blog post" },
      ],
    },
  };
}

interface Props {
  posts: any[];
}

const Index = ({ posts }: Props) => {
  return (
    <div>
      <h1>Apps's blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link passHref href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
