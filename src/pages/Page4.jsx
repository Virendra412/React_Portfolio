import React from 'react'

const Page4 = () => {
  return (
      <div className='bg-inherit page stop w-screen  h-screen sm:h-screen  shrink-0 px-5 sm:px-10  flex flex-col justify-between pt-[100px] sm:pt-64'>
          <div className=' flex flex-col md:flex-row justify-between gap-10'>
          <h5 className='text-xl sm:text-2xl basis-1/3 '>Ready to level up your team? I'm all in!  If you're seeking someone who blends creativity with code and is driven to make an impact, let’s chat. </h5>
          
          <div className="flex  border-t  basis-1/2 border-text-light dark:border-text-dark">
                <div className="text-1xl font-normal grow hidden sm:block">
                    <p  className='py-2 border-b border-text-light dark:border-text-dark'>EMAIL</p>
                    <p  className='py-2 border-b border-text-light dark:border-text-dark'>SOCIALS</p>
                </div>
                <div className="grow">
                    <div >
                        <a href="mailto:rishabhpratap412@gmail.com" className="flex justify-between gap-5 text-1xl border-b border-text-light dark:border-text-dark">
                            <p className='py-2 '>Enquiry</p>
                        <p className='py-2'>rishabhpratap412@gmail.com</p>
                        </a>
                        
                    </div>
                    <div >
                        <a href="https://www.instagram.com/rishabh_412chauhan/" className="flex justify-between gap-5 text-1xl border-b border-text-light dark:border-text-dark" >
                            <p className='py-2 '>Instagram</p>
                            <p className='py-2 '>rishabh_412chauhan</p>
                        </a>
                       
                    </div>
                    <div>
                        <a href="https://github.com/Virendra412" className="flex justify-between gap-5 text-1xl border-b border-text-light dark:border-text-dark" >
                            <p className='py-2 '>GitHub</p>
                        <p className='py-2'>github.com/Virendra412</p>
                        </a>
                        
                    </div>
                </div>
            </div>
          </div>

          <div className="footerLower flex flex-col sm:flex-row sm:gap-5 justify-between items-center sm:mb-5">
                <div className='flex gap-10 grow sm:self-end sm:mb-10 sm:text-base  '>
                    <p><span>Designed by</span> <span >Virendra Pratap</span></p>
                    <p>Portfolio&copy;2024</p>
                </div>
                <h2 className='navLogo italic font-bold text-8xl leading-[1] sm:text-[100px] md:text-[150px] xl:text-[250px] mb-16 sm:mb-5'>virendra</h2>
            </div>
    </div>
  )
}

export default Page4