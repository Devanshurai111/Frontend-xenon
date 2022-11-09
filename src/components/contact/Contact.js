import React,{useState} from 'react'
import './contact.css'
import axios from 'axios'
const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users",
      { email, name, message },
      config
    );
  }
  return (
    <div className='contact' >
      <h2 >Contact Me </h2>
      <form onSubmit={onSubmit}>
        <div >
          <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        </div>
        <div >
          <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        </div>
        <div>
          <textarea  id="message"placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button onClick={onSubmit}  type="submit">
          submit
        </button>
      </form>
    </div>
  )
}
export default Contact