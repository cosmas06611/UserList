import React, {useState, useEffect} from 'react';
import UserList from './UserList';
import axios from 'axios'





function App() {
  const [list, setList] = useState([])
  
const getUserList = async () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    setList(response.data);
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });

}

useEffect(() =>{
  getUserList();
})

  return (
    <div className="App">
      <UserList  list ={list}/>
    </div>
  );
}

export default App;
