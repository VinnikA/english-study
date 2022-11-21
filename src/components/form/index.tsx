import "./styles.scss"
import img from "../../assets/img/form/form_.png"
import { Btn } from "../ui/btn"

export const Form = () => {
  return (
    <section id="form" className="section_form">
      <div className="container">
        <div className="form">
          <div className="form__img">
            <img src={img} alt="form" />
          </div>
          <form action="#" className="form__field">
            <h3 className="heading">Записатись на пробний урок</h3>
            <label className="form__label">
              Ваше ім'я
              <input type="text" className="form__input"/>
            </label>
            <label className="form__label">
              Ваш номер телефону
              <input type="phone" className="form__input"/>
            </label>
            <Btn variant="filled">Записатись</Btn>
          </form>
        </div>
      </div>
    </section>
  )
}
