import React, { useEffect, useState } from 'react'

import styles from './index.module.scss'
import { MDBBtn } from 'mdbreact'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '_actions'
import classnames from 'classnames'

function SignUp() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signed = useSelector(state => state.auth.signed)
  
  const signUp = () => {
    dispatch( authActions.signUp({email, password}) )
  }

  useEffect(() => {
    console.log("signed", signed)
    signed && router.push("/")
  }, [signed])

  return (
    <div className={classnames("px-4 py-4 mt-12 mx-auto max-w-2xl rounded-lg border-solid border ", styles.SignIn)}>
      <div className="text-2xl font-bold text-center">
        Sign Up
      </div>
      <div className="pt-4">
        <div>
          <div className="pb-1 text-md">Email address</div>
          <input type="text" className={classnames("pl-1 w-80", styles.input)} value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="pt-4">
          <div className="pb-1 text-md">Password</div>
          <input type="password" className={classnames("pl-1 w-80", styles.input)} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="text-center pt-4">
          <MDBBtn color="primary" onClick={signUp}>Sign Up</MDBBtn>
        </div>
        <div className="flex justify-center pt-2">
          <div>Do you have an account already?</div>
          <Link href="/auth/signin"><a className="pl-2">Sign In</a></Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
