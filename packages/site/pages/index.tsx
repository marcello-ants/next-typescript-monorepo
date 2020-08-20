import React from "react";
import Link from "next/link";

export async function getStaticProps(context) {
  return {
    props: {
      posts: [
        { id: 1, title: "First site post" },
        { id: 2, title: "Second site post" },
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
      <h1>Apps's site</h1>
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
