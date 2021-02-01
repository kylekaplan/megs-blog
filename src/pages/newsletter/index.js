import React from 'react'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import { jsx, Heading } from "theme-ui"
import './form.css'

const Newsletter = () => {

  return (
    <Layout>
      <SEO title={'page.title'} description={'page.excerpt'} />
      <Heading as="h1" variant="styles.h1">
        Newsletter
      </Heading>
      <h1>greatness delivered straight to your inbox.</h1>
      <p>the stories, insights, secrets, tips & offers that don't usually make it elsewhere. helping you out in your human experience too ;) whatcha say?</p>
      <p>join the wandering wizard's𓂙 newsletter</p>
      <div id="convertkitform">
        <form action="https://app.convertkit.com/forms/2002007/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="2002007" data-uid="3933bf7d68" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
          <div data-style="clean">
            <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />
            <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
              <div class="formkit-field">
                <input class="formkit-input" aria-label="First Name" name="fields[first_name]" required="" placeholder="First Name" type="text" style={{ color: 'black', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: '700' }} />
              </div>
              <div class="formkit-field">
                <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" style={{ color: 'black', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: '700' }} />
              </div>
              <button data-element="submit" class="formkit-submit formkit-submit" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(81, 15, 140)', borderRadius: '4px', fontWeight: '400' }}>
                <div class="formkit-spinner" />
                <span class="">
                  OM IN ॐ&nbsp;
                </span>
              </button>
            </div>  
          </div>
        </form>
      </div>
      <span>i promise it won't be spam, only be the good stuff. you can unsubscribe at anytime</span>
    </Layout>
  )
}

export default Newsletter;
