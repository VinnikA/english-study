import "./styles.scss"
import { Carousel } from "../carousel"

export const Feedbacks = () => {
  return (
    <section id="feedbacks" className="container" >
      <div className="feedbacks">
        <h2 className="heading hading_center">Відгуки наших учнів</h2>
        <Carousel />
      </div>
    </section>
  )
}
