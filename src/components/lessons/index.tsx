import "./styles.scss"
import { lessons } from "../../content/content"
import { Card } from "../card"
import img1 from "../../assets/img/card/card1.png"
import img2 from "../../assets/img/card/card2.png"

export const Lessons = () => {
  return (
    <section className="container"> 
      <div className="lessons">
        <Card 
          id="first" 
          imgUrl={img1} 
          title={lessons.first.title}
          list={lessons.first.list}
        />
        <Card 
          id="second" 
          imgUrl={img2} 
          title={lessons.second.title}
          list={lessons.second.list}
        />
      </div>
    </section>
  )
}
