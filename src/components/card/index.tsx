import { Btn } from "../ui/btn"
import { ListItem } from "../ui/list-item"
import "./styles.scss"

interface ICardProps {
  id: string,
  imgUrl: string,
  title: string,
  list: string[]
}

export const Card = (props: ICardProps) => {

  const {id, imgUrl, title, list} = props
  
  const handleClick = () => {
    alert(`You choosed item with id: ${id}`)
  }

  return (
    <div className="card">
      <div className="card__img">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <ul>
          {list.map(item => <ListItem variant="small">{item}</ListItem>)}
        </ul>
        <Btn 
          variant="filled" 
          clickFn={handleClick} 
          value={id} 
        >
          Детальніше
        </Btn>
      </div>
    </div>
  )
}
