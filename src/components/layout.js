import * as React from 'react'
import { Link ,useStaticQuery,graphql} from 'gatsby'
import Footer from './footer'
import Header from './header'
import * as styles from '../styles/components/layout.module.scss'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.root}>
      {/* <title>{pageTitle} | {data.site.siteMetadata.title}</title> */}
      <div>
        <Header className={styles.header}/>
      </div>
      <main className={styles.main}>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout