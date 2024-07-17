import ContactList from "../ContactList/ContactList";
import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import style from "./App.module.css";

import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (contact) => {
    setContacts((prevValues) => {
      return [...prevValues, contact];
    });
  };

  return (
    <div className={style.app}>
      <h1 className={style.appTitle}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
