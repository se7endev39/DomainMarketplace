import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { salesActions } from '_actions'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import styled from 'styled-components'
import { useTable } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid var(--color-border-primary);

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th{
      
      font-weight: bold;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid var(--color-border-primary);
      border-right: 1px solid var(--color-border-primary);
      :last-child {
        border-right: 0;
      };
      text-align:center;
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const data = [
  {
    'User Name': 'Roman',
    'Short Address': 'romanadmin',
    'MRX Address': 'MHjjCBTa55DKWgVpNQdE2nBoYnSGYtXdu4',
  }
].concat(
  (new Array(29)).fill(0).map((v, i) => i + 5).map(i => ({ 'MRX Address': `MHjjCBTa55DKWgVpNQdE2nBoYnSGYtXdu${i}`})))

function MappingTable() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'User Name',
        accessor: 'User Name',
      },
      {
        Header: 'Short Address',
        accessor: 'Short Address',
      },
      {
        Header: 'MRX Address',
        accessor: 'MRX Address',
      },
    ],
    []
  )

  
  return (
    <div className={classNames("px-4 pt-8", styles.Sales)}>
      <div className={styles.title}>
        Mapping Table
      </div>
      <div>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
      </div>
    </div>
  );
}

export default MappingTable;
