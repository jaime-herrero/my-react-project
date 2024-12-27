import React from 'react'

function Login(props) {

  const user = {
    username: 'Jaime',
    email: 'jaime@email.com'
  }

  const handlClick = () => {
    props.handleLogin(user);
  
  }


  return (
    <section>
        <h2>Login section</h2>
        <button onClick={handlClick}>Login</button>
    </section>
  )
}

export default Login