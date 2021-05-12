import React, { useEffect, useState } from 'react'

import styles from './index.module.scss'
import { MDBBtn } from 'mdbreact'
import Link from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '_actions'

function SignIn() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signed = useSelector(state => state.auth.signed)

  const signIn = () => {
    dispatch( authActions.signIn({email, password}) )
  }

  useEffect(() => signed && router.push("/"), [signed])
  
  return (
    <div className={classnames("px-4 py-4 mt-12 mx-auto max-w-2xl rounded-lg border-solid border ", styles.SignIn)}>
      <div className="text-2xl font-bold text-center">
        Sign In
      </div>
      <div className="pt-4">
        <div>
          <div className="pb-1 text-md">Email address</div>
          <input type="text" className={classnames("pl-1 w-80", styles.input)} value="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="pt-4">
          <div className="pb-1 text-md">Password</div>
          <input type="password" className={classnames("pl-1 w-80", styles.input)} value="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="text-center pt-4" onClick={signIn}>
          <MDBBtn color="primary">Sign in</MDBBtn>
        </div>
        <div className="flex justify-center pt-2">
          <div>Don't you have an account?</div>
          <Link href="/auth/signup"><a className="pl-2">Sign Up</a></Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
