'use client';

import {usePathName} from 'next/navigation' 
import Link from 'next/link'

const navLinks = [
    {
        id : 1,
        href : '/posts',
        name : 'Posts'
    },
    {
        id : 2,
        href : '/about',
        name : 'About'
    }
]
const Header = () => {
    const pathname = usePathName();
    // console.log(pathname);
    
  return (
    <div>Header</div>
    // <div>(pathname)</div>
  )
}

export default Header