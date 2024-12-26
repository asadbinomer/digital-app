import React from 'react'

const Section4 = () => {
  return (
    <>
    <div className="w-full px-80 pb-32 flex flex-col items-center gap-16">
        <div className="flex items-center gap-10">
          <div className="relative w-[614px] h-[460px] flex flex-col justify-between button-div transition-all duration-1000 golfdiv overflow-hidden">
              <div className="p-10 w-fit z-10"><img src="/images/logogolf.webp" className='w-[144px]' alt="" /></div>
              <div className="flex flex-col gap-5 z-10 p-10">
                <h1 className='text-5xl font-medium Cooper text-white'>86% SEO Visibility Increase for Europe's Largest Golf Retailer</h1>
                <div className="flex items-center gap-[12px]">
                    <p className="text-[25px] text-[#fff] font-sans">View Case Study</p>
                    <div className="px-4 button py-2 flex items-center gap-[12px] text-[16px] font-sans font-medium cursor-pointer text-[#fff] transition-all leading-none rounded-[500px] border-[1.5px] border-[#B0B0B0]">
                        <svg
                            className="fill-current w-8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 15"
                        >
                            <path d="M29.565 7.029l-7.026 7.027-.79-.798 5.621-5.626a8.771 8.771 0 01-.014-.048c-.697-.002-1.394 0-2.091-.001H0V6.477h27.35l.022-.041-5.63-5.63.79-.806 7.033 7.029z"></path>
                        </svg>
                    </div>
                </div>
              </div>
              <div className="absolute bottom-0 z-[2] w-full h-[383px] bg-gradient-to-t from-black to-bg-trasparent"></div>
              <img src="/images/golf.webp" className='absolute z-[1] golf transition-all duration-1000 select-none' draggable={false} alt="" />
          </div>
          <div className="relative w-[614px] h-[460px] flex flex-col justify-between button-div transition-all duration-1000 golfdiv overflow-hidden">
              <div className="p-10 w-fit z-10"><img src="/images/ryman.webp" className='w-[144px]' alt="" /></div>
              <div className="flex flex-col gap-5 z-10 p-10">
                <h1 className='text-5xl font-medium Cooper text-white'>271% Visibility Increase for Stationery Brand</h1>
                <div className="flex items-center gap-[12px]">
                    <p className="text-[25px] text-[#fff] font-sans">View Case Study</p>
                    <div className="px-4 button py-2 flex items-center gap-[12px] text-[16px] font-sans font-medium cursor-pointer text-[#fff] transition-all leading-none rounded-[500px] border-[1.5px] border-[#B0B0B0]">
                        <svg
                            className="fill-current w-8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 15"
                        >
                            <path d="M29.565 7.029l-7.026 7.027-.79-.798 5.621-5.626a8.771 8.771 0 01-.014-.048c-.697-.002-1.394 0-2.091-.001H0V6.477h27.35l.022-.041-5.63-5.63.79-.806 7.033 7.029z"></path>
                        </svg>
                    </div>
                </div>
              </div>
              <div className="absolute bottom-0 z-[2] w-full h-[383px] bg-gradient-to-t from-black to-bg-trasparent"></div>
              <img src="/images/work.webp" className='absolute z-[1] golf transition-all duration-1000 select-none' alt="" draggable={false} />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[12px] my-[8px]"><img src="/images/profile.webp" className='w-[48px] h-[48px] rounded-[500px] bg-[#DBEAFE]' alt="" /><p className='text-[23px] font-sans text-[#262626]'>See more of</p></div>
            <div className="px-[20px] button py-[12px] flex items-center gap-[12px] text-[16px] font-sans font-medium cursor-pointer text-[#0f0f0f] transition-all leading-none rounded-[500px] border-[1.5px] border-[#B0B0B0]">Our Work<svg class="w-5 fill-current | md:w-6 lg:w-8"  fill="none"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 15">  <path d="M29.565 7.029l-7.026 7.027-.79-.798 5.621-5.626a8.771 8.771 0 01-.014-.048c-.697-.002-1.394 0-2.091-.001H0V6.477h27.35l.022-.041-5.63-5.63.79-.806 7.033 7.029z"></path></svg></div>
        </div>
    </div>
    </>
  )
}

export default Section4