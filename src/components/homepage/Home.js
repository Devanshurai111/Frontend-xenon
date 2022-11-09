import React from 'react'
import './home.css'
const Home = (props) => {
  return (
    <div className='home'>
      {props.flag===true ? <h1>You are already logged in</h1> : <h1>You are not logged in</h1>}
      <div className='photo'>
        <a href="contact"><button>contact me</button></a>
      </div>
    </div>
  )
}

export default Home