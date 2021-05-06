import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import {MDBCardImage} from 'mdbreact'

const Image = (props) => {

}

const ImageCollection = (props) => {
    return (
        <div className="flex flex-grow 2xl:p-0 pb-20 lg:flex-row flex-col">
            {
                props.images?.map( image => (
                    <img {...image} style={{margin: "auto"}}/>
                ))
            }
        </div>
    );
}

export default ImageCollection;