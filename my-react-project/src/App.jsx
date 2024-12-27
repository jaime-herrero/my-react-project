import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import ButtonComponent from './Components/ButtonComponent'
import Login from './Components/login'

// Version prueba subida git 4

function App() {

  // let number = 0;
  const [number, setNumber] = useState(0);
  const [myValue, setmyValue] = useState('');
  let myPlaceholder = 'Escribe aqui';
  
  const [greetings, setGreetings] = useState('Hello, World!');
  const links = {
    home: "home",
    blog: "blog",
    news: "news",
    contact: "Contact us"
  }

  // const [user, setUser] =  useState({
  //   username: 'Jaime',
  //   email: 'jaime@email.com'
  // })

  const [user, setUser] =  useState({})

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo)
  }

  const addOne = () => {
    // number ++;
    setNumber(number + 1);
    console.log(number)
  }

  const sayHello = () => {
    console.log('Hello!');
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <HeaderComponent greetingsValue={greetings} linksValue={links}></HeaderComponent>

      <main className='main-content'>
       <h2 onClick={sayHello}>Jelou {user.username}!</h2>

       <Login handleLogin={login}></Login>
       
       <h2 onClick={addOne}>Number: {number}</h2>
       
       <br/>
       <input value={myValue} placeholder={myPlaceholder} type='text' onChange={handleChange}/>
       <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App
