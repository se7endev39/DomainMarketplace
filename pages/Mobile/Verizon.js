import React from 'react';
import styles from './index.module.css';
import {MDBBtn} from 'mdbreact'
import verizon_logo from "../../assets/images/verizon.svg";

function Verizon() {
    return (
        <div className="pb-10">
            <img className="cursor-pointer logo pl-3" src={verizon_logo} alt="verizon_logo" />
            <div className={styles.verizon_text}>
                Videtur quod est super omne oppidum. transfre tavit tu iratus es contudit cranium cum dolor apparatus. Videtur quod est super omne oppidum.
            </div>
        </div>
    );
}

export default Verizon;