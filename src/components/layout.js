import * as React from 'react'
import { Link } from 'gatsby'
import OffcanvasExample from './offcanvasExample'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <OffcanvasExample/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout