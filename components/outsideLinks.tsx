import Insta from 'components/svgs/insta.svg'
import FB from 'components/svgs/fb.svg'
import Tictok from 'components/svgs/tictok.svg'
import styles from "../module.css/navigation.module.css"


export default function OutsideLinks() {

    function goTo(s) {
        console.log(s)
        //TODO go to the website in the string when clicked. 
    }

    
    return (
        <div className="flex justify-end w-1/6 cursor-pointer">
                {/* <div>like To know it</div> */}
                <FB className="w-1/3 h-10"onClick={goTo("facebook")} />
                <Tictok className="w-1/3 h-10" onClick={goTo("TicToc")}/>
                <Insta className="w-1/3 h-10" onClick={goTo("Instagram")}/>
        </div>
    )
}