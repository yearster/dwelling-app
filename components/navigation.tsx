import Menu  from 'components/svgs/menu.svg'
import Close from 'components/svgs/close.svg'
import { useState, useRef } from 'react'

import Link from 'next/link'

export default function Navigation() {
    const myRef = useRef(null);
    const [column, setColumn] = useState(false);
    const [row, setRow] = useState(true);
    function menu(e){
        if (column === true) {
            setColumn(false)
            setRow(true)
            console.log(myRef.current.classList)
            myRef.current.classList.add('hidden')

        } else {
            setColumn(true)
            setRow(false)
            myRef.current.classList.remove('hidden')
        }
        console.log(e);

        // console.log(e)
        // let list = document.querySelector('ul');
        // // console.log(list)
        // e.name === 'Menu' ? e.name = "close" : e.name = "menu"
    }
  return (
       <nav className="w-full p-5 pb-10 resize md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
                <span>
                    Hello
                </span>
                <span className="block text-3xl cursor-pointer md:hidden">
                    { column && <Close onClick={menu}/>}
                    { row && <Menu onClick={menu}/>}
                    {/* <Menu className="" onClick={menu}/>
                    <Close className="hidden" onClick={menu}/> */}
                </span>
                
            </div>
            {/* md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:opacity-100 opacity-0 top-[-1000px] transition-all ease-in duration-500 */}
            <ul ref={myRef} className="hidden transition-all duration-500 ease-in md:items-center md:flex">
                <li className="mx-4 my-3 md:my-0">
                    <Link className="text-xl hover:text-green-800" href="/about">about</Link>
                </li>
                <li className="mx-4 my-3 md:my-0">
                    <Link className="text-xl hover:text-green-800" href="/liketoknowit">liketoknow.it</Link>
                </li>
                <li className="mx-4 my-3 md:my-0">
                    <Link className="text-xl hover:text-green-800" href="/shop">shop our home</Link>
                </li>
                <li className="mx-4 my-3 md:my-0">
                    <Link className="text-xl hover:text-green-800" href="/garden">garden</Link>
                </li>
                <li className="mx-4 my-3 md:my-0">
                    <Link className="text-xl hover:text-green-800" href="/collaborate">collaborate</Link>
                </li>
                 <li className="mx-4 my-3 md:my-0">
                     <Link className="text-xl hover:text-green-800" href="/lifestyle">lifestyle</Link>
                 </li>
             </ul>
         </nav>
   )
     
 }
 
