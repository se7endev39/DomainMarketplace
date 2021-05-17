import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'
import classnames from 'classnames'
import { MDBBtn, MDBIcon } from 'mdbreact'
import Link from 'next/link'
import Faq from "containers/landing/faq";

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

const premiums = [
  {
    domain: "appleadmin",
    price: 50000
  },
  {
    domain: "applemedia",
    price: 28000
  },
  {
    domain: "applemetrix",
    price: 40000
  },
  {
    domain: "applecrypto",
    price: 6000
  },
]

const faqs = [
  {
    question: "Will I be able to transfer my domain?",
    answer: "Yes. The domain is stored in your cryptocurrency wallet and can be transferred by you after you claim the name on the blockchain with your wallet."
  },
  {
    question: "Which cryptocurrencies will I be able to use with my domain?",
    answer: "Yes. The domain is stored in your cryptocurrency wallet and can be transferred by you after you claim the name on the blockchain with your wallet."
  },
  {
    question: "Does Unstoppable Domains provide you with a wallet?",
    answer: "Yes. The domain is stored in your cryptocurrency wallet and can be transferred by you after you claim the name on the blockchain with your wallet."
  },
  {
    question: "How will I be able to view a blockchain website?",
    answer: "Yes. The domain is stored in your cryptocurrency wallet and can be transferred by you after you claim the name on the blockchain with your wallet."
  },
  {
    question: "Will I be able to search for and find blockchain domain websites on Google or other search engines?",
    answer: "Yes. The domain is stored in your cryptocurrency wallet and can be transferred by you after you claim the name on the blockchain with your wallet."
  },
  {
    question: "Will there be some sort of ‘whois’ record with my personal information associated to my domain?",
    answer: "Yes. The domain is stored in your cryptocurrency wallet and can be transferred by you after you claim the name on the blockchain with your wallet."
  },
]

function HomePage() {
  const router = useRouter()

  const homepage = useRef()
  const block1 = useRef()
  const block2 = useRef()
  const block3 = useRef()
  const blocks = [block1, block2, block3]
  const scroll2block = (i) => {
    const offsetTop = 0;
    if( i > 0)
      blocks[i-1].current.scrollIntoView( {behavior: "smooth"} );
  } 

  useEffect(() => {
    // router.push("/search?q=")
  }, [])

  return (
    <div className={styles.homepage} ref={homepage}>
      <div className="py-4">
        <div className="flex justify-end pr-16">
          {
            ["Home", "Domains", "FAQ", "About Us"].map((menu, i) =>(
              <div key={i} className="px-4 text-md cursor-pointer" onClick={() => scroll2block(i)}>
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
            <MDBBtn color="dark" className="text-lg">
              <Link href="/search">Find Domains</Link>
            </MDBBtn>
          </div>
        </div>
        <div className={classnames(styles.background)}>
        </div>
      </div>
      <div className={ classnames("py-8 px-12 text-center", styles.land2)} ref={block1}>
        <div className="px-20 text-4xl font-medium">
          Why Do I Need A Domain Name?
        </div>
        <div className="text-lg py-8 font-italic pt-4">
          By the domain, people can immediately identify what the company is doing. Choose an extension that's right for your website to grab the attention of potential customers.
        </div>
        <div className="pt-4 flex justify-center flex-wrap">
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
      <div className={classnames("py-8 text-center", styles.divider, styles.land2)} ref={block2}>
        <div className="text-4xl font-bold">
          Premium Domains Sale
        </div>
        <div className="pt-2 text-xl">
          Rare & exclusive metrix domain names, available for the first year.
        </div>
        <div className="pt-4 flex justify-center flex-wrap">
        {
          premiums.map( ({domain, price}, index) => (
            <div key={index} className={classnames(styles.premium, "mx-4 mt-4 pt-3")}>
              <div className={classnames("px-4 pt-4 text-2xl font-bold", styles.wrapper)}>
                {domain}
              </div>
              <div className={classnames("text-xl font-bold ", styles.price)}>
                ${ price }
              </div>
              <div className="pt-6 pb-4">
                <MDBBtn color="dark">
                  Add to Cart
                </MDBBtn>
              </div>
            </div>
          ))
        }
        </div>
      </div>

      <div className={classnames("py-8 text-center", styles.divider, styles.land2)} ref={block3}>
        <div className="text-4xl font-bold">
          FAQ
        </div>
        <div className="pt-4 flex justify-center flex-wrap">
        {
          faqs.map( (faq, index) => (
            <Faq {...faq} key={index}/>
          ))
        }
        </div>
        <div className="pb-12">

        </div>
      </div>

    </div>
  );
}

export default HomePage;
