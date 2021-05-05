import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import {MDBBtn} from 'mdbreact'

function Mobile() {
    return (
        <div className="flex flex-grow items-center 2xl:p-0 pb-20 lg:flex-row lg:flex-row-reverse flex-col">
            <div className={styles.screen1}></div>
            <div className={styles.slogan}>
                <div className="pl-4 m-auto lg:m-0">
                A powerful story can change the world.
                </div>
                <MDBBtn color="elegant" className="black_btn" style={{marginLeft: 20, marginTop: 18}}>
                    explore stories
                </MDBBtn>
            </div>
        </div>
    );
}

export default Mobile;