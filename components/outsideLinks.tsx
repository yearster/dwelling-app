import Insta from 'components/svgs/insta.svg'
import FB from 'components/svgs/fb.svg'
import Tictok from 'components/svgs/tictok.svg'
import styles from "../module.css/navigation.module.css"

export default function OutsideLinks() {
  function goTo(s) {
    console.log(s)
    if (s === "facebook") {
      window.open("https://www.facebook.com/search/top?q=dwellingontheridge", "_blank");
    } else if (s === "tiktok") {
      window.open("https://www.tiktok.com/@dwellingontheridge", "_blank");
    } else if (s === "instagram") {
      window.open("https://www.instagram.com/dwellingontheridge/", "_blank");
    }
  }

  return (
    <div className="flex justify-end w-1/6 cursor-pointer">
      <FB className="w-1/3 h-10" onClick={() => goTo("facebook")} />
      <Tictok className="w-1/3 h-10" onClick={() => goTo("tiktok")} />
      <Insta className="w-1/3 h-10" onClick={() => goTo("instagram")} />
    </div>
  )
}
