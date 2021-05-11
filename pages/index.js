import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'

function HomePage() {
  

  return (
    <div className={styles.homepage}>
      <Search/>
    </div>
  );
}

export default HomePage;
