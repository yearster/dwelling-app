import Menu  from 'components/svgs/menu.svg'
import Close from 'components/svgs/close.svg'
import OutsideLinks from './outsideLinks'
import { useState, useRef } from 'react'

import Link from 'next/link'

export default function Navigation() {
  // Initialize state to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create a reference for the menu element
  const menuElement = useRef(null);

  // Toggle the menu's open/closed state
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    menuElement.current.classList.toggle('hidden');
  }

  function goTo(s) {
    console.log(s)
    //TODO go to the website in the string when clicked. 
  }

  return (
    <nav className={`space-between w-full pb-10 resize md:flex mt-3`}>
      {/* Menu toggle button */}
      <div className="flex justify-between mb-10 md:hidden">
        <span className="text-3xl cursor-pointer ">
          {isMenuOpen ? <Close onClick={toggleMenu} /> : <Menu onClick={toggleMenu} />}
        </span>
        <OutsideLinks />
      </div>

      {/* Menu content */}
      <div ref={menuElement} className="hidden w-full md:flex">
        <ul className="w-full transition-all duration-500 ease-in md:flex">
          {/* Menu items */}
          <li className="my-3 mr-6 md:my-0">
            <Link className="text-xl hover:text-green-800" href="/about">about</Link>
          </li>
          <li className="my-3 mr-6 md:my-0">
            <Link className="text-xl hover:text-green-800" href="/liketoknowit">liketoknow.it</Link>
          </li>
          <li className="my-3 mr-6 md:my-0">
            <Link className="text-xl hover:text-green-800" href="/shop">shop our home</Link>
          </li>
          <li className="my-3 mr-6 md:my-0">
            <Link className="text-xl hover:text-green-800" href="/garden">garden</Link>
          </li>
          <li className="my-3 mr-6 md:my-0">
            <Link className="text-xl hover:text-green-800" href="/collaborate">collaborate</Link>
          </li>
          <li className="my-3 mr-6 md:my-0">
            <Link className="text-xl hover:text-green-800" href="/lifestyle">lifestyle</Link>
          </li>
        </ul>
        {!isMenuOpen && <OutsideLinks />}
      </div>
    </nav>
  )
}
