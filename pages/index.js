import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import classnames from 'classnames'
import { MDBBtn } from 'mdbreact'

function HomePage() {
  const router = useRouter()
  useEffect(() => {
    // router.push("/search?q=")
  }, [])

  return (
    <div className={styles.homepage}>
      <div className="py-4">
        <div className="flex justify-end px-4 pb-2">
          {
            ["Home", "Domains", "Help", "About Us"].map((menu, i) =>(
              <div key={i} className="px-2 text-lg">
                {menu}
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center">
        <div className={classnames(styles.canvas, "pt-8 px-4 canvas")}>
          <div className={classnames('text-xl tracking-widest')}>
            WEBSITES + MARKETING
          </div>
          <h1 className={'text-5xl	font-bold pt-2'}>
            Create your own website with your &nbsp;
            <span className={'text-6xl font-black'}>DOMAIN.</span>
          </h1>
          <div className="pt-2 px-6 text-xl">
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. 
          </div>
          <div className="pt-4 pb-8">
            <MDBBtn color="dark">
              Find Domains
            </MDBBtn>
          </div>
        </div>
        <div className={classnames(styles.background)}>

        </div>
      </div>

    </div>
  );
}

export default HomePage;
