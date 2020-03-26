import React, { useState, useContext } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { UserContext } from '../contexts/UserContextProvider'

const Register = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)

  async function springRegister() {
    const credentials = {
      username,
      password
    }
  
    let response = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });

    try {
      response = await response.json()
      setUser(response)
      props.history.push('/')
    } catch {
      console.log('Bad credentials');
    }
  }

  const pStyle = {
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
    cursor: 'pointer',
    userSelect: 'none'
  };

  return (
    <div>
      <h3>Register</h3>
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input 
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text" id="exampleEmail" placeholder="username.." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password" name="password" id="examplePassword" placeholder="password.." />
      </FormGroup>
      <Button onClick={springRegister} color="info">Register</Button>
      <p
        onClick={() => props.history.push('/perform-login')} 
        style={pStyle}>Already have an account?</p>
    </div>
  )
}

export default Register