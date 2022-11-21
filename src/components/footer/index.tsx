import "./styles.scss"
import logoUrl from "../../assets/img/icons/flag.svg"
import { Btn } from "../ui/btn"
import { footerNav, footerSocial } from "../../content/content"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="logo">
            <img src={logoUrl} alt="logo" className="logo__icon"/>
            <span className="logo__text">English study</span>
          </div>
          <div>
            <ul className="footer__list">
              {footerNav.map(item => (
                <li key={item.text} className="footer__list-item">
                  <a href={item.url} className="footer__link">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
          <ul className="footer__list">
              {footerSocial.map(item => (
                <li key={item.text} className="footer__list-item">
                  <a href={item.url} className="footer__link">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__btn-block">
            <Btn variant="outlined">Login</Btn>
            <Btn variant="filled">Sing up</Btn>
          </div>
        </div>
        <div className="authors">
          <div className="author">
            Design: 
            <a 
              className="author__link"
              href="https://www.linkedin.com/in/sotnikm"
              target="blank"
            >
              Sotnyk Maryna
            </a>
          </div>
          <div className="author">
            Development: 
            <a 
              className="author__link"
              href="https://www.linkedin.com/in/alexander-vinnik-56049a1a5"
              target="blank"
            >
              Oleksandr Vinnyk
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
