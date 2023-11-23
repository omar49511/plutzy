import TextBox from "@/components/Forum/TextBox";
import Coment from "@/components/Forum/Coment";
import Subtitle from "@/components/Subtitle";
import { LiaCommentSolid } from "react-icons/lia";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  return posts;
}

export default async function page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div className="max-w-5xl w-full m-auto pt-24">
      <div className="bg-neutral-100 border border-neutral-300 rounded-lg">
        <div className="">
          <div className="px-4 pt-4 pb-2">
            <p className="flex gap-1 text-sm text-neutral-500">
              <span>Publicado por</span>
              <span>{"USUARIO"}</span>
              <span>hace</span>
              <span>{"FECHA"}</span>
            </p>
            <hr />
          </div>
          <div className="px-4 py-2">
            <h1 className="text-lg font-semibold">
              {post.id} {post.title}
            </h1>
          </div>
          <div className="px-4">
            <p>
              {post.body} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi quia voluptatem nesciunt eos doloremque nostrum id?
              Doloribus, corporis omnis culpa similique, eligendi reiciendis
              sint hic mollitia, deserunt non dolor quae.
            </p>
          </div>
          <div className="px-4 pb-4 pt-2">
            <hr />
            <p className="flex items-center text-sm gap-1 text-neutral-500">
              <LiaCommentSolid />
              <span>3</span> <span>comentarios</span>
            </p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-2">
          <form action="">
            <p className="flex gap-1 text-sm text-neutral-700">
              <span>Comentar como:</span>
              <span>{"USUARIO"}</span>
            </p>
            <TextBox
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Write a comment..."
            />
            <div className="flex justify-end">
              <button className="h-10 w-24 bg-sky-600 hover:bg-sky-700 border border-sky-600 p-2 rounded text-center text-neutral-50">
                Comentar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Subtitle Title={"Comentarios"} />
      <div className="bg-neutral-100 border border-neutral-300 rounded-lg pb-4">
        <Coment />
        <Coment />
        <Coment />
        <Coment />
        <Coment />
        <Coment />
        <Coment />
      </div>
    </div>
  );
}
