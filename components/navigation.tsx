import Menu  from 'components/svgs/menu.svg'
import Close from 'components/svgs/close.svg'
import OutsideLinks from './outsideLinks'
import styles from "./navigation.module.css"
import { useState, useRef } from 'react'


import Link from 'next/link'

export default function Navigation({currentPage}) {
  // Initialize state to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create a reference for the menu element
  const menuElement = useRef(null);

  // Toggle the menu's open/closed state
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    menuElement.current.classList.toggle('hidden');
  }

  return (
    <nav className={`space-between w-full pb-5 p-5 resize md:flex hover:text] ${styles.nn}`}>
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
          {currentPage.toLowerCase() !== "home" && (
            <li className="my-3 mr-6 md:my-0">
              <Link className={`text-xl ${styles.hoverText}`} href="/">Home</Link>
            </li>
          )}
          {currentPage.toLowerCase() !== "about" && (
          <li className="my-3 mr-6 md:my-0">
            <Link className={`text-xl ${styles.hoverText}`} href="/about">About</Link>
          </li>
          )}
  
          <li className="my-3 mr-6 md:my-0">
          <Link className={`text-xl ${styles.hoverText}`} href="https://www.shopltk.com/explore/dwellingontheridge" target="_blank">LikeToKnow.it</Link>
          </li>

          {currentPage.toLowerCase() !== "shop our home" && (
            <li className="my-3 mr-6 md:my-0">
              <Link className={`text-xl ${styles.hoverText}`} href="/shopourhome">Shop Our Home</Link>
            </li>
          )}
          {currentPage.toLowerCase() !== "garden" && (
          <li className="my-3 mr-6 md:my-0">
            <Link className={`text-xl ${styles.hoverText}`} href="/garden">Garden</Link>
          </li>
          )}
          {currentPage.toLowerCase() !== "collaborate" && (
          <li className="my-3 mr-6 md:my-0">
            <Link className={`text-xl ${styles.hoverText}`} href="/collaborate">Collaborate</Link>
          </li>
          )}
          {currentPage.toLowerCase() !== "lifestyle" && (
          <li className="my-3 mr-6 md:my-0">
            <Link className={`text-xl ${styles.hoverText}`} href="/lifestyle">Lifestyle</Link>
          </li>
          )}
        </ul>
        {!isMenuOpen && <OutsideLinks />}
      </div>
    </nav>
  )
}
