import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'
import { cartActions } from '_actions'

function SearchPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( cartActions.get() )
  }, [])
  

  return (
    <div className={styles.Search}>
      <Search/>
    </div>
  );
}

export default SearchPage;
