export default function Subtitle({ Title }) {
  return (
    <div className="w-full mt-6 mb-2">
      <h1 className="text-xl text-gray-700 font-semibold dark:text-white">
        {Title}
      </h1>
      <hr className="my-4" />
    </div>
  );
}
