import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Form } from "./components/form/Form";
import { ContextWrapper } from "./context/GlobalContext";

export function App() {
  return (
    <ContextWrapper>
      <Header />
      <Main />
      <Footer />
      <Form />
    </ContextWrapper>
  );
}
