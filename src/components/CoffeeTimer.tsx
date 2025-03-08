const CoffeeTimer = () => {
  return (
    <div className="w-[373px] h-[175.18px] bg-black cmp-shadow rounded-[42px]">
        <div className="relative px-6 pt-9 pb-6 z-0">
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-2">
                <div className="text-[#F45807] font-medium leading-none text-[14.69px]">
                  5
                </div>
                <div className="text-[#F45807] font-medium leading-none text-[14.69px]">
                  10
                </div>
                <div className="text-[#7B7B7B] font-medium leading-none text-[14.69px]">
                  20
                </div>
                <div className="text-[#7B7B7B] font-medium leading-none text-[14.69px]">
                  25
                </div>
              </div>
              <div className="flex items-center justify-between">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={`orange-${i}`}
                    className="w-[9px] h-[42px] bg-[#F45807] rounded-full"
                  />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={`gray-${i}`}
                    className="w-[9px] h-[42px] bg-[#5A5A5A] rounded-full"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[#F25708] text-[37.05px] inter leading-none font-normal inter">
                16s
              </div>
              <div className="w-[42.12px] h-[42.12px] bg-[#571F01] rounded-full flex items-center justify-center">
                <div className="w-[17.39px] h-[17.39px] bg-[#FE6602] rounded-md"></div>
              </div>
              <div className="text-[#5A5A5A] text-[22.82px] leading-none font-normal inter">
                Espress
              </div>
            </div>
          </div>
          <div className="cmp-blur z-20 absolute left-2.5 top-[36px] w-[70.77px] h-[65.63px]"></div>
          <div className="cmp-blur z-20 absolute right-2.5 top-[36px] w-[70.77px] h-[65.63px]"></div>
        </div>
      </div>
  )
}

export default CoffeeTimer