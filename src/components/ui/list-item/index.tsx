import "./styles.scss"

interface IListItemProps {
  children: any,
  variant: string
}

export const ListItem = (props: IListItemProps) => {

  const {children, variant} = props

  const currentStyle = `list-item list-item_${variant}`

  return (
    <li className={currentStyle}>{children}</li>
  )
}
