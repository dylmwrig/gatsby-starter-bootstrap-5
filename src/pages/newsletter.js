import * as React from "react"
import { useState } from 'react'
import "../components/style.scss"

import PDFViewer from "../components/pdf-viewer.js"
import InfoBox from "../components/info-box.js"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const Newsletter = () => {
  //lower = older
  const nl1 = "https://drive.google.com/file/d/120OLilytJ7IduFwCqck7Rg0by8RK32Lw/preview"
  const nl2 = "https://drive.google.com/file/d/1-9iYTbP-5aA29PV-GzvlfbQrCOfIC_ml/preview"
  const nl3 = "https://drive.google.com/file/d/1wYtCKEq5bwSd_ZRbeaxBcDeS0tgEW0Mr/preview"
  const nl4 = "https://drive.google.com/file/d/1QMJtksOqea3KxAWAqNoZYaOc13F4ZWka/preview"
  const nl5 = "https://drive.google.com/file/d/1sw2z5hxPrsdEy_FMEoIuC2-PSjAdxy0c/preview"

  const [pdf, setPDF] = useState(nl5)
  //const pdfArr = [nl1, nl2, nl3, nl4, nl5]
  //const pdfMap = pdfArr.map(())
  return (
  <Layout>
    <div class="container my-2"> 
      <div class="row">
      <div class="col-10">
        <h2 class="text-left my-2">Bayanihan FACGC Newsletter</h2>
      </div>
      </div>
      <div class="row">
          <div class="col-10">
            <PDFViewer source={pdf}/>
          </div>
          <div class="col-2 text-start">
            <h3 class="pb-2">Select an issue</h3>
            <button onClick={() =>setPDF(nl5)}
              class="btn btn-link"
              type="button">Issue 2.1 &emsp;01/26/23
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl4)}
              class="btn btn-link"
              type="button">Issue 1.4 &emsp;11/29/22
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl3)}
              class="btn btn-link"
              type="button">Issue 1.3 &emsp;11/02/22
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl2)}
              class="btn btn-link"
              type="button">Issue 1.2 &emsp;10/05/22
            </button>
            <hr/>
            <button onClick={() =>setPDF(nl1)}
              class="btn btn-link pb-4"
              type="button">Issue 1.1 &emsp;09/23/22
            </button>
            <InfoBox 
              info={["Questions or comments about our newsletter?",
              "Let us know!"]}
              link={true}/>
          </div>
      </div>
    </div>
  </Layout>
  )
}

export default Newsletter

export const Head = () => (
    <Seo title="Bayanihan FACGC Newsletter" />
)
