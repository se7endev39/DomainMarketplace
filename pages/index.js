import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'components/homepage/Search'
import styles from './index.module.scss'

function HomePage() {
  const [topics, setTopics] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter()
  // useEffect(() => {
  //   router.push(`/Mobile`)
  // }, [])

  return (
    <div className={styles.homepage}>
      <Search/>
    </div>
  );
}

export default HomePage;
