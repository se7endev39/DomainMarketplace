import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import {MDBBtn} from 'mdbreact'
import ImageCollection from './imageCollection';

const images = [
    {
        src: "/images/page1/1.svg",
        width: "40%"
    },
    {
        src: "/images/page1/2.svg",
        width: "40%"
    },
    {
        src: "/images/page1/3.svg",
        width: "90%"
    },
    {
        src: "/images/page1/4.svg",
        width: "40%"
    },
    {
        src: "/images/page1/5.svg",
        width: "40%"
    },
]

function Mobile() {
    return (
        <div className="flex flex-grow 2xl:p-0 pb-20 lg:flex-row flex-col">
            <div className={styles.screen1}></div>
            <div className={styles.slogan}>
                <div className="pl-4 m-auto lg:m-0">
                A powerful story can change the world.
                </div>
                <MDBBtn color="elegant" className="black_btn" style={{marginLeft: 20, marginTop: 18}}>
                    explore stories
                </MDBBtn>
            </div>
            <ImageCollection 
                images={images}
            />
        </div>
    );
}

export default Mobile;