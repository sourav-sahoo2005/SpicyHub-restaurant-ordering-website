import React from 'react'
import Footer from '../Footer/Footer';
import './About.css';

export default function About() {
  return (

    <>
      <div className='about'>
        <div id='about_intro'></div>

        <p className='about_headings'>Term And Conditions</p>

        <div id="term_cond">

          <p>Acceptance if Terms By accessing, browsing, or using the SpicyHub application or website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy and any additional guidelines or future modifications (collectively, the “Terms”).
            <span>
              If you do not agree to these Terms, you must refrain from using SpicyHub. Continued use of our services indicates your acceptance of the Terms, which form a legally binding agreement between you and SpicyHub regarding your use of our platform for ordering and delivery of food.
            </span>
          </p>
          <div className='about_imgs' id='term_cond_img'></div>

        </div>

        <p className='about_headings'>Defination
          CUSTOMER:</p>

        <div id="term_cond">

          <p> <b> "Customer"</b> or<b> "You"</b> or<b> "Your" </b>refers to you, as a customer of the Services. A customer is someone who accesses or uses the Services for the purpose of sharing, displaying, hosting, publishing, transacting, or uploading information or views or pictures and includes other persons jointly participating in using the Services including without limitation a user having access to <b> 'restaurant business page'</b> to manage claimed business listings or otherwise.
            <span>
              <b>RESTURANT:</b>"resturant"means the resturants listed on <b> SpicyHub </b>platform
            </span>
          </p>
          <div className='about_imgs' id='customer_img'></div>

        </div>

        <p className='about_headings'>Changes To The Terms:</p>
        <div id="term_cond">

          <p><b>SpicyHub</b> reserves the right to modify, update, or replace these Terms and Conditions at any time, at our sole discretion.
            <span> When we make changes, we will revise the <b> “Last Updated”</b> date at the top of the Terms and, when required by law, provide additional notice through the app or other appropriate means. It is your responsibility to review the Terms periodically. </span>

            Your continued use of SpicyHub after any changes to the Terms constitutes your acceptance of the updated Terms.
          </p>
          <div className='about_imgs' id='term_cond_img'></div>

        </div>

      </div>
      <Footer />

    </>

  )
}
