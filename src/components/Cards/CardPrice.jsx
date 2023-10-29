export default function CardPrice(props) {
  const { title, price, description } = props;

  return (
    <div className="relative rounded-lg w-[16.25rem] px-[1px] py-[20px] my-[10px] text-center flex justify-around flex-col items-center bg-gradient-to-tr from-[#04051dea] from-0% to-[#2b566e] to-100% cursor-pointer">
      <div className="p-[20px]">
        <div className="font-extrabold uppercase text-[rgba(255, 255, 255, 0.64)] text-2xl mt-[.625rem] tracking-wide">
          {title}
        </div>
        <div className="text-white font-extrabold text-[50px] drop-shadow-2xl">
          {price}
        </div>
        <div className="text-[rgba(255,255,255,0.6)] mt-[10px] text-[14px]">
          {description}
        </div>
      </div>
      <button className="bg-[#2196F3] rounded-sm py-[0.75rem] px-[1.5rem] w-[90%] font-bold font-[.75rem] uppercase">
        Buy now
      </button>
    </div>
  );
}
