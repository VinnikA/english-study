import "./styles.scss"
import { feedbacks } from "../../content/content"
import { IconBtn } from "../ui/icon-btn"
import arrowLeft from "../../assets/img/icons/arrow-left.svg"
import arrowRight from "../../assets/img/icons/arrow-right.svg"
import { useState } from "react"


export const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  const goForward = () => {
    if(activeIndex === (feedbacks.length-1)) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex+1)
    }
  }

  const goBack = () => {
    if(activeIndex === 0) {
      setActiveIndex(feedbacks.length-1)
    } else {
      setActiveIndex(activeIndex-1)
    }
  }

  const position = (index: number) => {
    if(index === activeIndex) {return "center"}
    if(index < activeIndex) {return "left"}
    return "right"
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <IconBtn clickFn={goBack}>
          <img src={arrowLeft} alt="go back" />
        </IconBtn>
        <div className="carousel__screen">

          {feedbacks.map((item, index) => (
            <div className={`testimonial testimonial_${position(index)}`}>
            <div className="testimonial__img">
              <img src={item.imgUrl} />
            </div>
            <div className="testimonial__content">
              <p className="testimonial__text">
                {item.feedback}
              </p>
              <p className="testimonial__author">
                {item.author}, {item.city}
              </p>
            </div>
          </div>
          ))}

        </div>
        <IconBtn clickFn={goForward}>
          <img src={arrowRight} alt="go forvard" />
        </IconBtn>
      </div>
      <div className="carousel__bullets">
        {feedbacks.map((item, index) => (
          <div 
            className={`bullet ${index === activeIndex ? "bullet_active" : ""}`} 
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>

  )
}
