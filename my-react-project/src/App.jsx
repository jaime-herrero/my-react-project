import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import ButtonComponent from './Components/ButtonComponent'
import Login from './Components/login'
import MovieList from './Components/MovieList'

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

  const condition = true;

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
       {user.username && <h2 onClick={sayHello}>Jelou {user.username}!</h2>}

       <Login handleLogin={login}></Login>

       {condition && <h2>La condición se cumple</h2>}
       {!condition && <h2>La condición NO se cumple</h2>} 

       {condition ? (
        <h2>La condición se cumple ternario</h2>
       ) : (
       <h2>La condición NO se cumple ternario</h2>
       )}
 
       <h2 onClick={addOne}>Number: {number}</h2>

       <MovieList></MovieList>
       
       <br/>
       <input value={myValue} placeholder={myPlaceholder} type='text' onChange={handleChange}/>
       <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App
