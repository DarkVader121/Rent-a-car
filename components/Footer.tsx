import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer  className='flex flex-col text-black-100
    mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between
        gap-5 sm:px-16 px-6 py-10'>
          <div className='flex flex-col justify-start items-start gap-6'>
            <Image src="/logo.svg" alt='logo'
            width={118} height={18}
            className='object-contain' />

            <p className='text-base text-gray-700'>
              Carhub Showcase 2023 <br/>
              All rights reserved &copy; Erron John C. Lapac
            </p>
          </div>

          <div className='footer__links'>
            {footerLinks.map((Link) => ( 
              <div key={Link.title} className='footer__link'>
                <h3 className='font-bold'> 
                  {Link.title}
                </h3>
                {Link.links.map((Item) => (
                  <NextLink
                    key={Item.title}
                    href={Item.url}
                    className="text-gray-500"
                  >
                    {Item.title}
                  </NextLink>
                ))}
              </div>
            ))}
          </div>
          </div>

          <div className='flex justify-between items-center
          flex-wrap mt-10 border-t border-gray-100 sm:px-16
          px-6 py-10'> 
              <p>@2023 Carhub All Rights Reserved</p>

            <div className='footer__copyrights-link'>
              <NextLink
                href="/"
                className='yext-gray-500'>
                Privacy Policy
              </NextLink>
              <NextLink
                href="/"
                className='yext-gray-500'>
                Terms of User
              </NextLink>
            </div>
          </div>

        
    </footer>
  )
}

export default Footer