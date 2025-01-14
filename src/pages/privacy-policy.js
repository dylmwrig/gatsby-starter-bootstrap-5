import * as React from "react"
import "../components/style.scss"

import InfoBox from "../components/info-box.js"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

//add this when feature is added
//<li>Provide directions via Google Maps</li>

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div class="container text-start"> 
        <h1 class="pt-4">Privacy Policy for Filipino American Council of Greater Chicago</h1>
        
        <p>At Rizal Center Chicago, accessible from https://rizalcenterchicago.org/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Rizal Center Chicago and how we use it.</p>
        
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        
        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Rizal Center Chicago. This policy is not applicable to any information collected offline or via channels other than this website.</p>
        
        <h2>Consent</h2>
        
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        
        <h2>Information we collect</h2>
        
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p>When you apply to be a volunteer, we will ask for information including items such as name, company name, address, email address, telephone number, and contact information for listed references.</p>
        <p>Additionally, "Celebrating Rizal Center" submissions may include user submitted images.</p>
        
        <h2>How we use your information</h2>
        
        <p>We use the information we collect in various ways, including to:</p>
        
        <ul>
          <li>Accept volunteer applications</li>
          <li>Send you emails</li>
          <li>Publish user-submitted "Celebrating Rizal Center" stories in our newsletter</li>
        </ul>
        
        <h2>Log Files</h2>
        
        <p>Rizal Center Chicago follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        
        <h2>Cookies and Web Beacons</h2>
        
        <p>Like any other website, Rizal Center Chicago uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        
        <h2>Third Party Links</h2>
        
        <p>https://rizalcenterchicago.org includes links to external websites. These links do not fall under the rizalcenterchicago.org domain, and the Filipino American Council of Greater Chicago is not responsible for the privacy practices or the content of external websites. Your use of any linked website is solely at your own risk.</p>
        
        
        <h2>GDPR Data Protection Rights</h2>
        
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p>The right to access – You have the right to request copies of your personal data. </p>
        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        
        <h2>Children's Information</h2>
        
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        
        <p>Rizal Center Chicago does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        
        <p>Additionally, if an image submitted for "Celebrating Rizal Center" includes children, it must include only children of the submitter.</p>
        
        <h2>Changes to This Privacy Policy</h2>
        
        <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
        
        <p>Our Privacy Policy was created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/">TermsFeed Privacy Policy Generator</a>.</p>
        
        <br/>
        <hr/>
        <br/>
        <h2 class="text-black fw-italic pb-3">Contact Us</h2>
        
        <div class="col-4">
          <InfoBox 
            info={["If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us."]}
            linkPres={true}
            link="/contact/"/>
        </div>
</div>
    </Layout>
  )
}
export default PrivacyPolicy

export const Head = () => (
    <Seo title="Privacy policy" />
)
