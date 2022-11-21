import "./styles.scss"
import img1 from "../../assets/img/teachers/1.png"
import img2 from "../../assets/img/teachers/2.png"
import img3 from "../../assets/img/teachers/3.png"
import img4 from "../../assets/img/teachers/4.png"

export const Teachers = () => {
  return (
    <section id="teachers" className="container">
      <h2 className="heading heading_center">Наші викладачі</h2>
      <div className="teachers">
        <div className="teacher teacher_one">
          <div className="teacher__img">
            <img src={img1} alt="Mark" />
          </div>
          <div className="teacher__quote teacher__quote_one teacher__quote_left">
            Hello! Я Марк, я з Канади. В нас буде багато розмов на цікаві теми!
          </div>
        </div>
        <div className="teacher teacher_two">
          <div className="teacher__quote teacher__quote_two teacher__quote_right">
            Hi! Я Марія, я з України. Англійска зі мною стане просто задоволенням!
          </div>
          <div className="teacher__img">
            <img src={img2} alt="Mary" />
          </div>
        </div>
        <div className="teacher teacher_three">
          <div className="teacher__img">
            <img src={img3} alt="Max" />
          </div>
          <div className="teacher__quote teacher__quote_three teacher__quote_left">
            Hello! Я Макс. Обіцяю, нудно точно не буде. Обирай заняття скоріше!
          </div>
        </div>
        <div className="teacher teacher_four">
          <div className="teacher__quote teacher__quote_four teacher__quote_right">
            Hello! Я Ніка. Тобі просто варто спробувати і все точно вийде!
          </div>
          <div className="teacher__img">
            <img src={img4} alt="Nika" />
          </div>
        </div>
      </div>
    </section>
  )
}
