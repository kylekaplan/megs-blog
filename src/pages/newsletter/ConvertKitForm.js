import React from 'react'
import { Heading } from 'theme-ui'
import useScript from '../../hooks/useScript'

const ConvertKitForm = props => {
  useScript('https://deft-innovator-2473.ck.page/3933bf7d68/index.js');
  return (
    <>
      <Heading as="h1" variant="styles.h1">
        Newsletter
      </Heading>
      <h1>greatness delivered straight to your inbox.</h1>
      <p>the tantalizing stories, secrets, tips & offers that don't usually make it elsewhere...</p>
      <p>helping you out in your human experience too ;) whatcha say?</p>
      <script async data-uid="3933bf7d68" src="https://deft-innovator-2473.ck.page/3933bf7d68/index.js"></script>
      <span>i promise it won't be spam, only the sensational stuff. you can unsubscribe at anytime.</span>
    </>
  )
}

export default ConvertKitForm
