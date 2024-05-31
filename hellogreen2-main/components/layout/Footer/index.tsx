import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

const Footer: FC = (): ReactElement => {
  return (
    // 
    <footer>
      <div className=' w-full bg-black flex flex-col items-center justify-center '>
            
            <div className=' lg:flex lg:py-10 lg: px-10 lg:gap-24 flex-row space-y-10'>
    
                <div className='flex items-center justify-center xl:items-center xl:justify-center xl:flex lg:hidden'>
                    <Image src='Logo.svg' width={200} height={200} alt='home'/>
                </div>
    
                <div className=' flex-col space-y-4 flex items-center justify-center lg:justify-start lg:items-start'>
                    <p className=' text-white font-medium text-lg'>About</p>
                    <p className=' lg:w-[300px] text-gray-300 leading-8 w-[300px] sm:w-[500px] text-center lg:text-left'>&quot;Hello Green&quot; is an innovative web platform dedicated to addressing the pressing issue of non-biodegradable waste management.</p>
    
                    <div className=' flex gap-3 w-[200px]'>
                        <Link href=''><Image src='/assets/icons/Twitter.svg' width={60} height={60} alt='twitter'/></Link>
                        <Link href=''><Image src='/assets/icons/facebook.svg' width={60} height={60} alt='facebook'/></Link>
                        <Link href=''><Image src='/assets/icons/instagram.svg' width={60} height={60} alt='instagram'/></Link>
                        <Link href=''><Image src='/assets/icons/priterrest.svg' width={60} height={60} alt='priterrest'/></Link>
                    </div>
                </div>
    
                <div className=' flex-col space-y-4 flex items-center justify-center lg:justify-start lg:items-start'>
                    <p className=' text-white font-medium text-lg'>Links</p>
    
                    <div className='  space-y-3 flex-col flex items-center justify-center lg:items-start lg:justify-start'>
                        <Link href=''><p className='text-gray-300'>Request Pickup</p></Link>
                        <Link href=''><p className='text-gray-300'>Request Buy</p></Link>
                        <Link href=''><p className='text-gray-300'>About Usp</p></Link>
                        <Link href=''><p className='text-gray-300'>Articles</p></Link>
                        <Link href=''><p className='text-gray-300'>Contact</p></Link>
                    </div>
                </div>
    
                <div className=' flex-col space-y-4 flex items-center justify-center lg:justify-start lg:items-start'>
                    <p className=' text-white font-medium text-lg'>Our Services</p>
    
                    <div className=' space-y-3 flex-col flex items-center justify-center lg:items-start lg:justify-start'>
                        <Link href=''><p className='text-gray-300'>Waste Pickups</p></Link>
                        <Link href=''><p className='text-gray-300'>Waste Solutions</p></Link>
                        <Link href=''><p className='text-gray-300'>Roll-off Services</p></Link>
                        <Link href=''><p className='text-gray-300'>24/7 Support</p></Link>
                        
                    </div>
                </div>
    
                <div className=' flex-col space-y-4 flex items-center justify-center lg:justify-start lg:items-start'>
                    <p className=' text-white font-medium text-lg'>Contact Us</p>
    
                    <div className='  space-y-6 flex-col flex items-center justify-center lg:items-start lg:justify-start'>
                        <Link href='' className=' items-center justify-center flex-col flex lg:flex-row gap-3'><Image src='/assets/icons/Phone.svg' width={20} height={20} alt='phone'/><p className='text-gray-300'>+94 76 260 5 123</p></Link>
                        <Link href='' className=' items-center justify-center flex-col flex lg:flex-row gap-3'><Image src='/assets/icons/email.svg' width={20} height={20} alt='phone'/><p className='text-gray-300'>hellogreen@hello.com</p></Link>
                        <Link href='' className=' items-center justify-center flex-col flex lg:flex-row gap-3'><Image src='/assets/icons/location.svg' width={20} height={20} alt='phone'/><p className='text-gray-300'>No: 91, Berker Street, London</p></Link>
                        
                    </div>
                </div>
    
            </div>
    
    
    
            <div >
                
                <p className=' pt-5 text-white text-sm'>Copyright © 2024 Hello Green All Rights Reserved.</p>
    
            </div>
    
    
        </div>
    </footer>
  )
};

export default Footer;
