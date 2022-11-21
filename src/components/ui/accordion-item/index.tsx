import "./styles.scss"
import { IconBtn } from "../icon-btn"
import ArrowDown from "../../../assets/img/icons/arrow-down.svg"
import { useState } from "react"

interface IAccordionItemProps {
  question: string,
  answer: string,
}

export const AccordionItem = (props: IAccordionItemProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const {question, answer} = props

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const arrowStyle = `arrow ${isOpen ? "arrow__up" : ""}`

  const answerStyle = `accordion-item__answer ${isOpen ? "accordion-item__answer_open" : ""}`

  return (
    <div className="accordion-item">
      <div className="accordion-item__btn">
        <IconBtn clickFn={handleClick}>
          <img src={ArrowDown} alt="more" className={arrowStyle} />
        </IconBtn>
      </div>
      <p className="accordion-item__question">{question}</p>
      <p className={answerStyle}>{answer}</p>
    </div>
  )
}
