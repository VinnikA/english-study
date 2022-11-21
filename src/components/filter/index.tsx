import "./styles.scss"
import { filter } from "../../content/content"
import { Btn } from "../ui/btn"

export const Filter = () => {
  return (
    <div id="courses" className="filter">
      <div className="container">
        <h2 className="heading heading_center">{filter.heading}</h2>
        <div className="filter__first">
          {filter.first.map(item => <Btn variant="outlined">{item}</Btn>)}
        </div>
        <div className="filter__second">
          <div></div>
          {filter.second.map(item => <Btn variant="outlined">{item}</Btn>)}
          <div></div>
        </div>
      </div>
    </div>
  )
}
