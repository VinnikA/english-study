import "./styles.scss"

interface IBtnProps {
  children: any,
  variant: string,
  clickFn?: (value: any) => void,
  value?: string
}

export const Btn = (props: IBtnProps) => {

  const {children, variant, clickFn, value} = props

  const currentStyle = `btn btn_${variant}`

  const handleClick = (value: any) => {
    if(clickFn) {
      clickFn(value)
    }
  }

  return (
    <button className={currentStyle} onClick={() => handleClick(value)}>
      {children}
    </button>
  )
}
