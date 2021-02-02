import React from 'react'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import ConvertKitForm from './convertKitForm.js'

const Newsletter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" description="the tantalizing stories, secrets, tips &..." />
      <ConvertKitForm />
    </Layout>
  )
}

export default Newsletter;
