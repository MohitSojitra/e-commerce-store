import React, {useCallback, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Api} from '../../utils/Api'
import './signup.css'

function Index() {
  const {replace, push} = useHistory()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const _handleSubmit = useCallback(async () => {
    if (fullName.length > 2 && email.length > 2 && password.length > 2) {
      setLoading(true)
      const {statusCode, data} = await Api.postRequest('/api/user/signup', {
        email,
        fullName,
        password,
      })
      if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
        setLoading(false)
        alert(data)
        return
      }
      alert(data)
      replace('/signin')
    }
  }, [email, fullName, password, replace])
  if (loading) return <h1>Loading...</h1>
  return (
    <div className="signupscreen">
      <div className="container">
        <div className="innerContainer">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              // backgroundColor: 'red',
            }}
          >
            <div style={{cursor: 'pointer'}} onClick={() => push('/')}>
              <i class="fas fa-arrow-circle-left fa-5x"></i>
            </div>
            <p>Signup</p>
          </div>

          <label for="fname">Full Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your full name.."
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="lname"
            name="email"
            placeholder="Your email.."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="lname"
            name="password"
            placeholder="Your Password.."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Link to="/signin" className="link">
            <span>Already have an account ?</span>
          </Link>
          <br />

          <input type="submit" value="Sign up" onClick={_handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Index
