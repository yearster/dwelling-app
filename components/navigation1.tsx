import Menu  from 'components/svgs/menu.svg'
import Close from 'components/svgs/close.svg'
import OutsideLinks from './outsideLinks'
import { useState, useRef } from 'react'

import Link from 'next/link'

export default function Navigation() {
    const ul = useRef(null);
    const [column, setColumn] = useState(false);
    const [row, setRow] = useState(true);
    function menu(e){
        if (column === true) {
            setColumn(false)
            setRow(true)
            ul.current.classList.add('hidden')

        } else {
            setColumn(true)
            setRow(false)
            ul.current.classList.remove('hidden')
        }
    }
    function goTo(s) {
        console.log(s)
        //TODO go to the website in the string when clicked. 
    }
  return (
       <nav className={`space-between w-full pb-10 resize md:flex mt-3`}>
            <div className="flex justify-between mb-10 md:hidden">
                <span className="text-3xl cursor-pointer ">
                    { column && <Close onClick={menu}/>}
                    { row && <Menu onClick={menu}/>}
                </span>
                <OutsideLinks/>
            </div>
            <div ref={ul} className="hidden w-full md:flex">
                <ul className="w-full transition-all duration-500 ease-in md:flex">
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
                <OutsideLinks/>
            </div>
            
         </nav>
   )
     
 }
 
