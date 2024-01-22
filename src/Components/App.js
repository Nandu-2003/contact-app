import React from 'react';
import "./App.css";
import Header from './Header';
import Addcontact from './Addcontact';
import ContactList from './ContactList';

function App() {
   const contact =[
    {
      id:1,
      name:"Alice",
      email:"alice@gmail.com",
    },
    {
      id:2,
      name:"Bob",
      email:"bob@gmail.com",
    },
   ]

  return (
    <div className='ui container '>
      <Header/>
      <Addcontact/>
      <ContactList contacts={contact}/>
    </div>
  );
}

export default App;
