import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <h1 className={style.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
    </div>
  );
}

export default App;
