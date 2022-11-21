import "./styles.scss"

interface IIconBtnProps {
  children: any,
  clickFn?: (value: any) => void,
  value?: string
}

export const IconBtn = (props: IIconBtnProps) => {

  const {children, clickFn, value} = props

  const handleClick = (value: any) => {
    if(clickFn) {
      clickFn(value)
    }
  }

  return (
    <button className="icon-btn" onClick={() => handleClick(value)}>
      {children}
    </button>
  )
}
