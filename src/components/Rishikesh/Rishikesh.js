import React, {useState} from 'react'

import TamiaImg from '../../assets/rishikesh.png'
import location from '../../assets/loaction.svg'
import call from '../../assets/call.svg'
import mail from '../../assets/mail.svg'
import Day4 from './4Day/Package'
import Day7 from './7Day/Package'
import Day11 from './11Day/Package'

const Rishikesh = () => {

  const [plan, setPlan] = useState("4day");

  return (
    <section className='absolute top-24 bg-white'>
      <div className='relative h-[38rem] lg:h-[42rem] xl:mx-16 lg:mx-16 md:mx-16 mx-4 2xl:mx-24 animate-fade animate-once animate-duration-500 animate-ease-linear rounded-3xl drop-shadow-2xl overflow-hidden' >
        <div className='absolute w-full h-16 bg-black bg-opacity-40 '>
          <h1 className='text-white mt-3 ml-3 text-2xl font-medium text-center
          sm:text-3xl md:ml-4
          lg:ml-8'>Rishikesh, Uttarakhand</h1>
        </div>
        <div className='absolute top-36 w-10 left-6
        lg:'><img src={location} alt='location'/></div>
        <div className='absolute top-56 w-10 left-6
        lg:'><img src={call} alt='call'/></div>
        <div className='absolute top-80 w-10 left-6
        lg:'><img src={mail} alt='mail'/></div>

        <img src={TamiaImg} className='w-full h-full object-cover' alt='Tamia'/>

        <div className='absolute bottom-0 h-48 text-white bg-black bg-opacity-40
        sm:'>
          {/* <h1 className='text-white mt-3 ml-3 text-2xl font-medium text-center
          sm:text-3xl md:ml-4
          lg:ml-8'>Tamia, Madhya Pradesh</h1> */}
          <p className='realtive text-sm w-5/6 h-5/6 font-sans text-center mx-auto my-5 
           sm:text-base sm:my-8
           lg:text-lg lg:w-5/6 lg:my-10'>Yoga Retreat is a gathering of people who are joining together to practice yoga in a group setting.
          Yoga Retreat is a gathering of people who are joining together to practice yoga in a group setting.
          Yoga Retreat is a gathering of people who are joining together to practice yoga in a group setting.</p>
        </div>
      </div>

      <div className='mt-3'>
        <div>
          <h1 className='text-[1.75rem] text-sitegreen mt-14 font-extrabold text-center'>Yoga Retreat Packages</h1>
        </div>
        <div className='mx-4 flex flex-wrap md:justify-center'>
          <button className= {`border-2 w-48 h-12 mx-auto my-2 rounded-xl lg:mx-4 focus:bg-sitegreen ${plan==='4day'? 'bg-sitegreen text-white border-litegreen font-semibold':'hover:bg-litegreen border-sitegreen bg-white text-black '}`} onClick={()=> setPlan('4day')}>4-Day Basic Package</button>
          <button className= {`border-2 w-48 h-12 mx-auto my-2 rounded-xl lg:mx-4 focus:bg-sitegreen ${plan==='7day'? 'bg-sitegreen text-white border-litegreen font-semibold':'hover:bg-litegreen border-sitegreen bg-white text-black'}`} onClick={()=> setPlan('7day')}>4-Day Basic Package</button>
          <button className={`border-2 w-48 h-12 mx-auto my-2  rounded-xl lg:mx-4 focus:bg-sitegreen ${plan==='11day'? 'bg-sitegreen text-white border-litegreen font-semibold':'hover:bg-litegreen border-sitegreen bg-white text-black'}`} onClick={()=> setPlan('11day')}>4-Day Basic Package</button>

        </div>
        <br/>
        <div className='mx-14'>
          <div className={`${plan==='4day'? 'block': 'hidden'} 
          animate-fade-down animate-once animate-duration-500 animate-ease-linear"`}>
            <Day4 />
          </div>
          <div className={`${plan==='7day'? 'block': 'hidden'}
          animate-fade-down animate-once animate-duration-300 animate-ease-linear`}>
            <Day7 />
          </div>
          <div className={`${plan==='11day'? 'block': 'hidden'}
          animate-fade-down animate-once animate-duration-300 animate-ease-linear`}>
            <Day11/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rishikesh