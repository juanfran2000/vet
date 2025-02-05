import Image from "next/image";

export default function Nav() {
  return (
    <div className="w-full h-20 lg:h-24 bg-[#1b1b29] flex items-center justify-between px-6 lg:px-10">
      <div className="flex items-center gap-x-8">
        <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full p-1">
          <Image
            src="/marca/petVet.png"
            alt="logo"
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
        <div className="relative w-[180px] h-[32px] items-center bg-white rounded-full hidden lg:flex">
          <span className="icon-[zondicons--search] absolute left-3 text-black text-lg" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full h-full bg-white/10 rounded-full pl-10 pr-4 text-[#dadbdf] text-sm outline-none placeholder:text-gray-500 placeholder:text-xs"
          />
        </div>
      </div>
      <div className="flex text-[#dadbdf] items-center gap-x-4 lg:gap-x-8">
        <div className="flex items-center gap-x-4">
          <span className="icon-[zondicons--phone] text-sm hidden lg:block" />
          <p className="text-sm font-bold text-[15px] lg:text-[13px]">
            +593 99-500-1783
          </p>
        </div>

        <div className="w-14 lg:w-16 h-6 bg-gradient-to-b from-blue-700 to-blue-600 rounded-full text-xs flex items-center justify-center font-bold  lg:from-transparent lg:to-transparent lg:text-[15px] gap-x-1">
          <span className="icon-[streamline--interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half]" />
          24 / 7
        </div>
        <div className="items-center gap-x-2 hidden lg:flex">
          <span className="icon-[bx--map] text-[22px]" />
          <p className="text-xs font-bold uppercase text-[13px]">
            Moscú, calle Zubarev, 7
          </p>
        </div>
        <div className="w-6 h-6 lg:w-10 lg:h-10 md:bg-[#dadbdf] rounded-full flex items-center justify-center text-[#dadbdf] lg:text-black">
          <span className="icon-[material-symbols-light--menu] text-2xl lg:text-lg" />
        </div>
      </div>
    </div>
  );
}
