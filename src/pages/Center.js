import React from 'react'

function Center() {
  return (
    <div>
      <div class="container cams-container">
      <h3>מצלמות גלים מהמרכז</h3>
    </div>

      <div class="container cams-container">
        <div class="row">
          <div class="col-xs-12 col-lg-6">
            <div class="card">
              <h1 class="card-title">טיילת תל אביב</h1>
              <iframe title="שידור חי מטיילת תל אביב" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="https://webcasting.co.il/player/tlv/cam5_mute.html"></iframe>
            </div>
          </div>

          <div class="col-xs-12 col-lg-6">
            <div class="card">
              <h1 class="card-title">החוף המערבי</h1>
              <iframe title="שידור חי מהחוף המערבי יפו" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="https://webcasting.co.il/player/tlv/cam4_mute.html"></iframe>
            </div>
          </div>
      
      <div class="col-xs-12 col-lg-6">
            <div class="card">
              <h1 class="card-title">הילטון תל אביב</h1>
              <iframe title="שידור חי מחוף הילטון תל אביב" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="https://g2.ipcamlive.com/player/player.php?alias=604f601935d65"></iframe>
            </div>
          </div>
      
      <div class="col-xs-12 col-lg-6">
            <div class="card">
              <h1 class="card-title">הילטון ב' תל אביב</h1>
              <iframe title="שידור חי מחוף הילטון ב' תל אביב" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="https://g2.ipcamlive.com/player/player.php?alias=604f5fc79d973"></iframe>
            </div>
          </div>
      
      
          <div class="col-xs-12 col-lg-6">
            <div class="card">
              <h1 class="card-title">גורדון תל אביב</h1>
              <iframe title="שידור חי מחוף גורדון תל אביב" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" src="https://webcasting.co.il/player/tlv/frishman_mute.html"></iframe>
            </div>
          </div>

          <div class="col-xs-12 col-lg-6">
            <div class="card rishon">
              <h1 class="card-title">ראשון לציון</h1>
              <iframe title="שידור חי מחוף ראשון לציון" src="https://stream.cawamo.com/rl/"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
      
      <div class="col-xs-12 col-lg-6">
            <div class="card">
              <h1 class="card-title">חוף טובגו בת ים</h1>
              <iframe title="שידור חי מחוף טובגו בת ים" align="top" src="https://rtsp.me/embed/ETtNefEF/" frameborder="0" allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Center