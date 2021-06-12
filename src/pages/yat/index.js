import React, { useEffect } from 'react'
import { Heading } from 'theme-ui'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'

const Yat = () => {

    useEffect(() => {
        // redirect
        window.location.replace("https://y.at/🍄📖🔱👽⛰");
    }, [])

  return (
    <Layout>
      <SEO title="Y.at" description="y.at webpage" />
      <Heading as="h1" variant="styles.h1">
        YAT
      </Heading>
      Redirecting...
    </Layout>
  )
}

export default Yat;
