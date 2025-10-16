import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navitems from './navitems';
import UserDropdown from './UserDropdown';




const Header = () => {
  // Assuming the image is in public/assets/icons/logo.svg
  const imagePath = "/assets/icons/logo.svg"; 

  return (
    <header className='sticky top-0 header'>
      <div className='conatiner header-wrapper'>
        <Link href="/">
        
          <Image 
            src={imagePath} alt="logo" width={140} height={32} 
            className='h-8 w-auto cursor-pointer'
          />
        </Link>
        <nav className='hidden sm:block'>
            <Navitems/>
           </nav>
           <UserDropdown/>
      

      </div>

    </header>
  )
}

export default Header