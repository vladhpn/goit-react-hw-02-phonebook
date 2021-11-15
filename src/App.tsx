import { useState } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';
import {IContacts} from './interfaces'

// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };



// type ContactsType = {
//   id: string,
//   name: string,
//   number: string,
  
// }

// interface IContacts {
//   id: string;
//   name: string,
//   number: string
// }



const App:React.FC = () => {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [filter, setFilter] = useState<string>('');

  const addContact = (name:string, number:string) => {
    const newContact:IContacts = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    setContacts(prev => [newContact, ...contacts]);
  };

  const deleteContact = (id:string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    // console.log(filter);
  };

  const getVisibleContact = contacts.filter(contact => {
    if (filter === '') {
      return contacts;
    }
    return contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <>
      <Form addContact={addContact} />

      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContact}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
