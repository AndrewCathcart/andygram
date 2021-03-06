import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { HomeIcon, MenuIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';

function Header() {
  const [numMessages, setNumMessages] = useState<Number>(3);
  return (
    <header className='shadow-sm border-b bg-white top-0 z-50'>
      <div className='flex justify-between bg-white max-w-6xl mx-5 md:mx-auto '>
        {/* Desktop Logo */}
        <div className='relative hidden ml-4 md:inline-grid w-24 h-9 mt-3 flex-shrink-0 cursor-pointer hover:scale-110 duration-150 ease-out'>
          <Image src='/insta-logo.svg' layout='fill' objectFit='contain' />
        </div>
        {/* Mobile Logo */}
        <div className='relative md:hidden w-8 h-8 flex-shrink-0 cursor-pointer my-3  hover:scale-110 duration-150 ease-out'>
          <Image
            src='/insta-logo-mobile.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* Search Bar */}
        <div className='max-w-xs'>
          <div className='relative my-2 py-2 px-4 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center'>
              <SearchIcon className='h-5 w-5 text-gray-500'></SearchIcon>
            </div>
            <input
              className='bg-gray-50 block w-full pl-10 h-6 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
              type='text'
              placeholder='Search'
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex space-x-4 items-center justify-end'>
          <MenuIcon className='h-6 md:hidden cursor-pointer  hover:scale-110 duration-150 ease-out' />
          <HomeIcon className='nav-btn' />
          <div className='relative nav-btn'>
            <PaperAirplaneIcon className='nav-btn rotate-45 translate-x-1 -translate-y-1' />
            <div className='absolute -top-2 -right-2 text-xs w-5 h-5 font-medium bg-red-400 rounded-full flex items-center justify-center animate-bounce text-white'>
              {numMessages}
            </div>
          </div>
          <PlusCircleIcon className='nav-btn' />
          <UserGroupIcon className='nav-btn' />
          <HeartIcon className='nav-btn' />
          <UserCircleIcon className='inline-flex h-6 cursor-pointer md:pr-4 xl:pr-0  hover:scale-110 duration-150 ease-out' />
        </div>
      </div>
    </header>
  );
}

export default Header;
