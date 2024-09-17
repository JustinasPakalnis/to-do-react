import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Form } from "./components/form/Form";
import { ContextWrapper } from "./context/GlobalContext";
import { LightboxContextWrapper } from "./context/LightboxContext";

export function App() {
  return (
    <ContextWrapper>
      <LightboxContextWrapper>
        <Header />
        <Main />
        <Footer />
        <Form />
      </LightboxContextWrapper>
    </ContextWrapper>
  );
}
