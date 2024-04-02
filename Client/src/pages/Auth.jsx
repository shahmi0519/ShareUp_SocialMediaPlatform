import React from 'react'
import './Auth.css'
import Logo from '../img/lgnw.png'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img className='imglogo' src={Logo} alt=''/>
            <div className="Webname">
                <h1 className='h1'>ShareUp</h1>
                <h5>Post your thoughts and share your joyfull moments</h5>
            </div>
        </div>
        <LogIn/>
        {/* <SignUp/> */}
    </div>
  )
}

function LogIn(){
  return(
    <div className="a-right">
      <form className='infoForm authForm authForm1'>
        <h3>Log In</h3>

        <div>
          <input 
          type="text" 
          placeholder='Username'
          className='infoInput' 
          name='username'
          />
        </div>
        <div>
          <input 
          type="password" 
          placeholder='Password'
          className='infoInput' 
          name='password'
          />
        </div>
        <div>
        <button className='button infoButton'>LogIn</button></div>
        <div>
          <span style={{fontSize:"12px"}}>
            Don't have an account? SignUp
          </span>
          
        </div>
      </form>
    </div>
  )
}

function SignUp(){
  return(
    <div className="a-right">
      <form  className='infoForm authForm authForm2'>
        <h3>Sign Up</h3>

        <div>
        <input 
          type="text" 
          placeholder='First Name'
          className='infoInput' 
          name='firstname'
          />
          <input 
          type="text" 
          placeholder='Last Name'
          className='infoInput' 
          name='lastname'
          />
        </div>

        <div>
          <input
          type='text'
          placeholder='Usernames'
          name='username'
          className='infoInput'/>
        </div>

        <div>
          <input
          type='text'
          placeholder='Password'
          name='password'
          className='infoInput'/>

          <input
          type='text'
          placeholder='Confirm Password'
          name='confirmpass'
          className='infoInput'/>
        </div>
        <div>
          <button className='button infoButton' type='submit'>SignUp</button>
        </div>
        <div>
          <span style={{fontSize:'12px'}}>Already have an account? LogIn!</span>
        
        </div>
      </form>
    </div>
  )
}


export default Auth