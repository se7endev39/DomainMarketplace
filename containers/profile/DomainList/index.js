import styles from './index.module.scss'
import { MDBBtn } from 'mdbreact'
import Link from 'next/link'
import DomainItem from '../DomainItem'

const DomainList = ({sales_list}) => {
  return (
    <div className="pt-2 flex-grow">
      {
        sales_list?.map((item, i) => (
          <DomainItem key={i} {...item}/>
        ))
      }
      {
        sales_list.length == 0 &&
        <div className="pt-4 text-xl">
          No items is in your domainList.
          Search your domains.
          <div className="pt-2">
            <MDBBtn color="dark">
              <Link href="/search">Find Domains</Link>
            </MDBBtn>
          </div>
        </div>
      }
    </div>
  )
}

export default DomainList