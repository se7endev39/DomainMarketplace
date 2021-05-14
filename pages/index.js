import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import classnames from 'classnames'
import { MDBBtn } from 'mdbreact'
import Link from 'next/link'

const images = [
  {
    url: "/images/landing/1.png",
    title: "New domain extensions"
  },
  {
    url: "/images/landing/2.jpg",
    title: "Batch Domain Search"
  },
  {
    url: "/images/landing/3.svg",
    title: "Domain transfer"
  },
]

function HomePage() {
  const router = useRouter()
  useEffect(() => {
    // router.push("/search?q=")
  }, [])

  return (
    <div className={styles.homepage}>
      <div className="py-4">
        <div className="flex justify-end pr-16">
          {
            ["Home", "Domains", "Help", "About Us"].map((menu, i) =>(
              <div key={i} className="px-4 text-md cursor-pointer">
                {menu}
              </div>
            ))
          }
        </div>
      </div>
      <div className={classnames(styles.canvas, "flex flex-col lg:flex-row text-center")}>
        <div className="pt-8 px-4 canvas">
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
              <Link href="/search">Find Domains</Link>
            </MDBBtn>
          </div>
        </div>
        <div className={classnames(styles.background)}>
        </div>
      </div>
      <div className={ classnames("py-8 px-12 text-center", styles.land2)}>
        <div className="px-20 text-4xl font-medium">
          Why Do I Need A Domain Name?
        </div>
        <div className="text-lg py-8 font-italic pt-4">
          By the domain, people can immediately identify what the company is doing. Choose an extension that's right for your website to grab the attention of potential customers.
        </div>
        <div className="pt-4 flex justify-evenly">
        {
          images.map( (image, index) => (
            <div key={index}>
              <div className={classnames("px-4 py-4 ", styles.wrapper)}>
                <div className={ classnames("w-56 h-56", styles.round_image) } style={{backgroundImage: `url(${ image.url })`}}/>
              </div>
              <div className="text-xl font-bold ">
                { image.title }
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <div className={classnames("py-4 text-center", styles.divider)}>
        <div className="pt-4 text-4xl font-bold">
          Premium Domains Sale
        </div>
        <div className="pt-2 text-xl">
          Rare & exclusive metrix domain names, available for the first year.
        </div>

      </div>

    </div>
  );
}

export default HomePage;
