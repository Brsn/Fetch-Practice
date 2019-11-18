import React, {Component} from 'react';

class App extends React.Component{
  state = {
    contacts : []
  }
  getContacts = async () => {
    const response = await fetch('https://contacts-monolith.herokuapp.com/api/contacts');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
  }
  componentDidMount () {
    this.getContacts()
  }
  render() {
   return (
   <div>
   <p>Hello</p>
   </div>
   )
 }
}
export default App;
