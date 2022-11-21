import "./styles.scss"
import { useState } from "react"
import { feedbacks } from "../../content/content"
import { IconBtn } from "../ui/icon-btn"
import arrowLeft from "../../assets/img/icons/arrow-left.svg"
import arrowRight from "../../assets/img/icons/arrow-right.svg"
import img0 from "../../assets/img/feedbacks/1.png"
import img1 from "../../assets/img/feedbacks/2.png"
import img2 from "../../assets/img/feedbacks/3.png"



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
          
          <div className={`testimonial testimonial_${position(0)}`}>
            <div className="testimonial__img">
              <img src={img0} />
            </div>
            <div className="testimonial__content">
              <p className="testimonial__text">
                {feedbacks[0].feedback}
              </p>
              <p className="testimonial__author">
                {feedbacks[0].author}, {feedbacks[0].city}
              </p>
            </div>
          </div>

          <div className={`testimonial testimonial_${position(1)}`}>
            <div className="testimonial__img">
              <img src={img1} />
            </div>
            <div className="testimonial__content">
              <p className="testimonial__text">
                {feedbacks[1].feedback}
              </p>
              <p className="testimonial__author">
                {feedbacks[1].author}, {feedbacks[1].city}
              </p>
            </div>
          </div>

          <div className={`testimonial testimonial_${position(2)}`}>
            <div className="testimonial__img">
              <img src={img2} />
            </div>
            <div className="testimonial__content">
              <p className="testimonial__text">
                {feedbacks[2].feedback}
              </p>
              <p className="testimonial__author">
                {feedbacks[2].author}, {feedbacks[2].city}
              </p>
            </div>
          </div>

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
