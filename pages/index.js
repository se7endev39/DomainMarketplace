import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'

function HomePage() {
  const router = useRouter()
  useEffect(() => {
    router.push("/search?q=")
  }, [])

  return (
    <div className={styles.homepage}>
      
    </div>
  );
}

export default HomePage;
