import ContactForm from "../ContactForm/ContactForm";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <h1 className={style.appTitle}>Phonebook</h1>
      <ContactForm />
    </div>
  );
}

export default App;
