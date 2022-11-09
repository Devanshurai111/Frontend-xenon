import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'
const Login = (props) => {
  const nav=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleSubmit= async (e) => {
    e.preventDefault();
    const config = {
      headers: { 
          "Content-Type": "application/json"
      }
  }
  const { data } = await axios.post("/api/users/login", { email, password }, config)
    console.log(data);
    if (data.email) {
      props.changeflag(true);
      nav("/")
    }
  }
  if(
    props.flag===true
  ){
   return (
    <h1>You are already logged in</h1>
   )
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
      <div className='or'>or</div>
     <a href="signup"> <button>Signup</button></a>
      </div>
  )
}

export default Login