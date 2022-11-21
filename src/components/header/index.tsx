import './styles.scss'
import logoUrl from '../../assets/img/icons/flag.svg'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo">
          <img src={logoUrl} alt="logo" className='logo__icon'/>
          <span className='logo__text'>English study</span>
        </div>
        <nav>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a href="#form" className="header__link">Пробний урок</a>
            </li>
            <li className="header__nav-item">
              <a href="#plan" className="header__link">Як працюємо</a>
            </li>
            <li className="header__nav-item">
              <a href="#feedbacks" className="header__link">Відгуки</a>
            </li>
            <li className="header__nav-item">
              <a href="#form" className="header__link header__link_btn">Записатись</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
