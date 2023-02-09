import React from 'react'
import centerCams from '../camsJson.json' 


function Center() {
  return (
    <div>
      <div className="container cams-container">
        <h3>מצלמות גלים מהמרכז</h3>
      </div>
      <div className="container cams-container">
        <div className="row">
          { centerCams.map(item => (
            <div className="col-xs-12 col-lg-6">
            <div className="card">
              <h1 className="card-title">{item.spotName}</h1>
              <iframe title={item.title} scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} src={item.src}></iframe>
            </div>
          </div>
          ))
          }

          <div className="col-xs-12 col-lg-6">
            <div className="card rishon">
              <h1 className="card-title">ראשון לציון</h1>
              <iframe title="שידור חי מחוף ראשון לציון" src="https://stream.cawamo.com/rl/" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Center