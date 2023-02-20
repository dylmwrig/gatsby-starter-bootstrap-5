import * as React from "react"

import './style.scss'

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row pt-5 pb-2">
          <div class="col-2"/>
          <p class="col-3 text-muted text-start">©2023 FILIPINO AMERICAN COUNCIL OF<br/>GREATER CHICAGO - ALL RIGHTS RESERVED.</p>
          <div class="col-2">
            <a href="https://www.facebook.com/facchicago">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Follow us on Facebook!"
                height="50" width="50">
              </img>
            </a>
          </div>
          <p class="col-3 text-muted text-end">1332 W IRVING PARK ROAD<br/>CHICAGO, ILLINOIS 60613</p>
          <div class="col-2"/>
        </div>
        <div class="row pb-4 ">
          <div class="col-2"/>
          <div class="col-2 text-start"><a href="/support/">Support</a></div>
          <div class="col-2"><a href="/volunteer/">Volunteer</a></div>
          <div class="col-2"><a href="/contact/">Contact Us</a></div>
          <div class="col-2 text-end"><a href="/newsletter/">Bayanihan News</a></div>
          <div class="col-2"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
