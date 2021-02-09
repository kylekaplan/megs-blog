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
      <h1>greatness delivered straight to your inbox.</h1>
      <p>the tantalizing stories, secrets, tips & offers that don't usually make it elsewhere...</p>
      <p>helping you out in your human experience too ;) whatcha say?</p>
      <ConvertKitForm />
      <span>i promise it won't be spam, only the sensational stuff. you can unsubscribe at anytime.</span>
    </Layout>
  )
}

export default Newsletter;
