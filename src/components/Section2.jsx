import React from 'react'

const Section2 = () => {
  return (
    <>
    <div className="flex items-center gap-[255px] pr-[315px]">
        <div className="flex gap-[32px]">
            <div className="flex flex-col gap-[32px]">
                <img src="/images/img1.webp" className='min-w-[180px] h-[570px]' alt="" />
                <img src="/images/img2.webp" className='min-w-[180px] h-[270px]' alt="" />
            </div>
            <div className="flex flex-col gap-[32px]">
                <img src="/images/img3.webp" className='min-w-[440px] h-[270px]' alt="" />
                <img src="/images/img4.webp" className='min-w-[580px] h-[660px]' alt="" />
            </div>
        </div>
        <div className="flex flex-col gap-[40px]">
            <h1 className="text-[60px] font-medium Cooper z-10">Your <span className="Cooper relative"><svg className="absolute bottom-[-4px] z-[-1] h-[16px] w-[100%] left-0" viewBox="0 0 271 19" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"> <path d="M268.783 18.599C123.253-1.529 2.459 13.367 1.262 13.521L.053 6.061c1.22-.155 123.176-15.227 270.02 5.089l-1.29 7.449z" fill="#00EB8F"/></svg> Solutions</span> to digital performance.</h1>
            <div className="flex flex-col gap-[24px]">
                <p className='text-[18px] font-medium leading-relaxed font-sans text-[#262626]'>We want to take the pressure off for you. Simple. Our digital performance solutions cover a range of digital channels and services to help you in every aspect of digital marketing. From strategic digital consultancy to in-channel management, we have the skills and experience to make significant commercial improvements to our clients’ digital presence.</p>
                <div className="flex items-center gap-[24px]">
                    <div className="flex items-center gap-[12px] my-[8px]"><img src="/images/profile.webp" className='w-[48px] h-[48px] rounded-[500px] bg-[#DBEAFE]' alt="" /><p className='text-[23px] font-sans text-[#262626]'>Learn more about</p></div>
                    <div className="px-[20px] button py-[12px] flex items-center gap-[12px] text-[16px] font-sans font-medium cursor-pointer text-[#0f0f0f] transition-all leading-none rounded-[500px] border-[1.5px] border-[#B0B0B0]">Our Services<svg class="w-5 fill-current | md:w-6 lg:w-8"  fill="none"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 15">  <path d="M29.565 7.029l-7.026 7.027-.79-.798 5.621-5.626a8.771 8.771 0 01-.014-.048c-.697-.002-1.394 0-2.091-.001H0V6.477h27.35l.022-.041-5.63-5.63.79-.806 7.033 7.029z"></path></svg></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section2