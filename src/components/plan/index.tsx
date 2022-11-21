import "./styles.scss"
import { plan } from "../../content/content"
import img from "../../assets/img/plan/plan.png"
import { ListItem } from "../ui/list-item"

export const Plan = () => {
  return (
    <section id="plan" className="container">
      <div className="plan-wrapper">
        <h2 className="heading heading_center">{plan.heading}</h2>
        <div className="plan">
          <div className="plan_img">
            <img src={img} alt={plan.heading} />
          </div>
          <div className="plan__content">
            <h3 className="heading">{plan.listTitle}</h3>
            <ul>
              {plan.list.map(item => <ListItem variant="big">{item}</ListItem>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
