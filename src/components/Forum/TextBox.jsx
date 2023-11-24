export default function TextBox({ name, id, cols, rows, placeholder }) {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      className="outline outline-2 outline-neutral-400 p-2 w-full rounded dark:bg-[#27272a]"
      placeholder={placeholder}
    ></textarea>
  );
}
