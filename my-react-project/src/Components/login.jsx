import React from 'react'

function Login(props) {

  const user = {
    username: '',
    email: '',
  }

  const SetUsername = (e) => {
    user.username = e.target.value;
  }

  const SetEmail = (e) => {
    user.email = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user')
    props.handleLogin(user);
  
  }


  return (
    <section>
        <h2>Login section</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input type='text' id="username" onChange={SetUsername} />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type='text' id="email" onChange={SetEmail} />
          </fieldset>
          
            <button>Login</button>
        </form>
    </section>
  )
}

export default Login