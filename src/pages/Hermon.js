import React from 'react'

function Hermon() {
  return (
    <div>
      <div className="container cams-container">
        <h3>שידור חי אתר החרמון</h3>
      </div>

      <div className="container cams-container hermon">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
            <iframe title="חי מאתר החרמון" src="https://www.weather2day.co.il/webcams/hermon-cam1.html" frameBorder="1" marginWidth="5" marginHeight="5" allowFullScreen="" autoPlay="1"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hermon