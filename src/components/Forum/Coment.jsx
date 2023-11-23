export default function Coment() {
  return (
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
      <div className="px-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quia
          voluptatem nesciunt eos doloremque nostrum id? Doloribus, corporis
          omnis culpa similique, eligendi reiciendis sint hic mollitia, deserunt
          non dolor quae.
        </p>
      </div>
    </div>
  );
}
