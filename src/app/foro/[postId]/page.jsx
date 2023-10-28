import React from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  return posts;
}

export default async function page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div className="max-w-5xl  w-full  m-auto  py-16 pt-40">
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}
