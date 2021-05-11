import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from 'next/router'
import Search from 'containers/homepage/Search'
import styles from './index.module.scss'

function SearchPage() {
  const router = useRouter()

  return (
    <div className={styles.Search}>
      <Search/>
    </div>
  );
}

export default SearchPage;
