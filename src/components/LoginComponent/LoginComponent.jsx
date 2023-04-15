import React from 'react'
import '../../assets/settings/settings.scss'
import logo from '../../assets/images/logo.svg'
import './LoginComponent.scss'

const LoginComponent = () => {
  let username = document.querySelector('.login__form-login')
  let password = document.querySelector('.login__form-password')
  const form = document.querySelector('.login__form')
  
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    username = username.value.trim()
    password = password.value.trim()
    
    const value = JSON.stringify({
      "user_name": username,
      "user_password": password,
      "user_role" :  'admin'
    })
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: value,
    };
    
    fetch(`http://localhost:3000/users`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.id) {
        alert('succes')
      } else {
        alert('invalid request')
      }
    })
    .catch(error => console.log('error', error));
  })
  
  return (
    <section className="login">
    <div className="container">
    <div className="login__container">
    <img className='login__img' src={logo} alt="logo" width='75' height='69' />
    
    <form className='login__form' action="">
    <h1 className='login__heading'>Kirish</h1>
    <label className='login__label1'>
    <input type="text" className='login__form-login' placeholder='Login' />
    </label>
    <label className='login__label2'>
    <input type="text" className='login__form-password' placeholder='Parol' />
    </label>
    
    <button className='login__btn'>Kirish</button>
    </form>
    </div>
    </div>
    </section>
    )
  }
  
  export default LoginComponent