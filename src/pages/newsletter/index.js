import React from 'react'
import { Heading } from 'theme-ui'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import ConvertKitForm from './ConvertKitForm'

const Newsletter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" description="the tantalizing stories, secrets, tips &..." />
      <Heading as="h1" variant="styles.h1">
        Newsletter
      </Heading>
      <p style={{ fontSize: '20px' }}>Want a more personal dose? 
        <br />
        <br />
        Sign up for the stories and insights that get sent to your inbox every MWF.
        </p>
      <ConvertKitForm />
      <span>you can unsubscribe at anytime.</span>
    </Layout>
  )
}

export default Newsletter;
