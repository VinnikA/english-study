import "./styles.scss"
import { AccordionItem } from "../ui/accordion-item"
import { faq } from "../../content/content"

export const Faq = () => {
  return (
    <section className="container">
      <div className="faq">
        <h2 className="heading heading_center">Часті запитання</h2>
        {faq.map(item => (
          <AccordionItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  )
}
