import "./styles.scss"

import { Header } from "../header"
import { Btn } from "../ui/btn"

export const Main = () => {
  return (
    <div id="main" className="container">
      <div className="main">
        <Header />
        <div className="main__content">
          <h1 className="main__heading">Заговори англійською вже зараз!</h1>
          <p className="main__description">
            Ровивайте свою кар"єруб подорожуйтеб здайте іспит та багато іншогою Всі наші заняття включають яскраві уроки, на яких ви отримаєте практичні навички та впевненість в англійській мові
          </p>
          <div className="main__btn-wrapper">
            <Btn variant="filled">Детальніше</Btn>
          </div>
        </div>
      </div>
    </div>
  )
}
