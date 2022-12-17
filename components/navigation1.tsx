import Link from 'next/link'
import Menu from 'components/svgs/menu.svg'

export default function Navigation() {
    function menu(e){
        console.log("menu clicked")
        let list = document.querySelector('ul');
        e.name === 'Menu' ? e.name = "close" : e.name = "menu"
    }
  return (
       <nav className="p-5 pb-10 shadow resize md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
                <span>
                    ABOUT
                </span>
                <span className="block text-3xl cursor-pointer md:hidden">
                    <Menu className="" onClick="menu(this)"/>
                </span>
            </div>

            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-1000px] transition-all ease-in duration-500">
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

// Add Ion Icons for "menu" and "close" for mobile navigation
