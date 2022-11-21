import "./styles.scss"
import { useState } from "react"
import arrow from "../../../assets/img/icons/arrow-down.svg"
import { IconBtn } from "../icon-btn"

export const UpBtn = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop
    if(scroll > 140) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  window.addEventListener("scroll", toggleVisible)

  return (
    <>
      {
        visible && 
          <div className="up-btn">
            <IconBtn clickFn={scrollToTop}>
              <img src={arrow} alt="up" className="arrow-up" />
            </IconBtn>
          </div>
      }
    </>

  )
}