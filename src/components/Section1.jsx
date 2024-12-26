import React from 'react'

const Section1 = () => {
  return (
    <>
    <div className="w-[100%] h-[530px] px-[317px] py-[112px] flex items-center justify-center text-center bg-black text-white">
        <div className="flex flex-col items-center gap-[32px]">
            <div className="flex items-center gap-[12px]"><div className="w-[14px] h-[14px] bg-[#00eb8f] rounded-[50px]"></div> <p className='text-[18px] font-medium'>A Digital Performance Solutions Agency in Manchester</p></div>
            <div className="flex flex-col items-center gap-[40px]">
                <h1 className='text-[46px] font-medium Cooper'>We combine network agency expertise, <br /> with a highly collaborative relationship. <br /> We’re a little <span className='Cooper relative'>different, <img src="/images/circle-green.svg" className='absolute select-none min-w-[206px] h-[75px] top-[-10px] left-[-12px]' alt="" draggable="false" /></span> This is Digital.</h1>
                    <div className="flex items-center button-div gap-[12px]">
                        <p className="text-[25px] text-[#fff] font-sans">About us</p>
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
        </div>
    </div>
    </>
  )
}

export default Section1