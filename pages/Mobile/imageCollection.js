import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import {MDBCardImage} from 'mdbreact'


const Image = ({width, src, title, comment}) => {
    return (
    <div className={styles.Image} style={{width}}>
        <img src={src} className="rounded-xl"></img>
        <div className={styles.image_texts}>
            {title && (
                <div className={styles.image_title}>{title}</div>
            )}
            { comment && (
                <div className={styles.image_comment}>#{comment}</div>
            )}
        </div>
    </div>)
}

const ImageCollection = (props) => {
    return (
        <div className="flex flex-wrap 2xl:p-0 pb-20 pt-4 lg:flex-wrap ">
            {
                props.images?.map( image => (
                    <Image {...image}/>
                ))
            }
        </div>
    );
}

export default ImageCollection;