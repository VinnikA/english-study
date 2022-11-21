import { Faq } from "./components/faq"
import { Feedbacks } from "./components/feedbacks"
import { Filter } from "./components/filter"
import { Footer } from "./components/footer"
import { Form } from "./components/form"
import { Lessons } from "./components/lessons"
import { Main } from "./components/main"
import { Plan } from "./components/plan"
import { Teachers } from "./components/teachers"
import { UpBtn } from "./components/ui/up-btn"

function App() {

  return (
    <div className="app">
      <UpBtn />
      <Main />
      <Filter />
      <Lessons />
      <Plan />
      <Teachers />
      <Feedbacks />
      <Form />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
