import * as React from 'react'
import { Link ,useStaticQuery,graphql} from 'gatsby'
import Footer from './footer'
import Header from './header'
import * as styles from './layout.module.scss'
import FooterFloat from './footer-float'

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
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        {children}
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
      <div className={styles.floatFooter}>
        <FooterFloat />
      </div>
    </div>
  )
}

export default Layout