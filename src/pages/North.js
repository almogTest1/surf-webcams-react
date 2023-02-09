import React from 'react'

function North() {
  return (
    <div>
      <div className="container cams-container">
        <h3>מצלמות גלים מהצפון</h3>
      </div>
      <div className="container north cams-container">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
          <div className="card">
            <h1 className="card-title">פולג</h1>
            <iframe title="שידור חי מחוף פולג" src="https://g2.ipcamlive.com/player/player.php?alias=620e738bdcc00&amp;autoplay=1" scrolling="no" frameBorder="0" align="center" allowFullScreen={true}></iframe>
          </div>
          </div>

          <div className="col-xs-12 col-lg-6">
            <div className="card">
              <h1 className="card-title">חיפה נירוונה</h1>
              <iframe title="שידור חי מחוף נירוונה חיפה" src="https://g2.ipcamlive.com/player/player.php?alias=60acaa1aeee83&amp;autoplay=1" scrolling="no" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
              </div>
          </div>

          <div className="col-xs-12 col-lg-6">
            <div className="card">
              <h1 className="card-title">מעגן מיכאל</h1>
              <iframe title="שידור חי מחוף מעגן מיכאל" scrolling="no" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src="https://ipcamlive.com/player/player.php?alias=5b17c8292282c&amp;autoplay=1&amp;skin=white&amp;hidelink=true&amp;disablereportbutton=true&amp;" allowFullScreen={true}></iframe>
              </div>
          </div>
                
          <div className="col-xs-12 col-lg-6">
          <div className="card">
            <h1 className="card-title">חיפה בקדור</h1>
            <iframe src="https://g2.ipcamlive.com/player/player.php?alias=5ffd9eb29b665" title="שידור חי מחוף הבקדור חיפה" scrolling="no" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} quality="high"></iframe>
          </div>
          </div>

          <div className="col-xs-12 col-lg-6">
            <div className="card">
              <h1 className="card-title">קריית ים</h1>
              <iframe src="https://www.youtube.com/embed/vhaEGwlNJyw" title="שידור חי מחוף קריית חיים" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} quality="high"></iframe>
            </div>
          </div>

          <div className="col-xs-12 col-lg-6">
            <div className="card">
              <h1 className="card-title">חיפה החוף השקט</h1>
              <iframe src="https://v.angelcam.com/iframe?v=1eyopj51l8&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJoYWlmYXNhaWwuY2xpY2syc3RyZWFtLmNvbSIsImNhbWVyYV9pZCI6NTcwMTksImV4cCI6MTY3NTk0NTczMX0.oUS9kJFexDX0lSPSKwPTCDPCNU6v3gCmPHkEfp7nXPQ&amp;autoplay=1" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" allow="fullscreen;autoplay;"></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default North