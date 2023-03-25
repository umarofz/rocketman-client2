import React from 'react'
import '../../assets/settings/settings.scss'
import logo from '../../assets/images/logo.svg'
import './LoginComponent.scss'

const LoginComponent = () => {
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