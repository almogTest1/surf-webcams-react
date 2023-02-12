import React from 'react'

function Center() {
  const spotsList = [
    {"spotName":"טיילת תל אביב", "src": "https://webcasting.co.il/player/tlv/cam5_mute.html", "title": "שידור חי מטיילת תל אביב"},
    {"spotName":"החוף המערבי תל אביב", "src": "https://webcasting.co.il/player/tlv/cam4_mute.html", "title": "שידור חי מהחוף המערבי ביפו"},	
    {"spotName":"הילטון תל אביב", "src": "https://g2.ipcamlive.com/player/player.php?alias=604f601935d65", "title": "שידור חי מחוף הילטון תל אביב"},
    {"spotName":"הילטון ב תל אביב" , "src": "https://g2.ipcamlive.com/player/player.php?alias=604f5fc79d973", "title": "שידור חי מחוף הילטון ב תל אביב"},
    {"spotName":"גורדון תל אביב" , "src": "https://webcasting.co.il/player/tlv/frishman_mute.html", "title": "שידור חי מחוף גורדון תל אביב"},
	  {"spotName":"טובגו בת ים", "src": "https://rtsp.me/embed/ETtNefEF/", "title": "שידור חי מחוף טובגו בת ים"}
  ]
  
  return (
    <div>
      <div className="container cams-container">
        <h3>מצלמות גלים מהמרכז</h3>
      </div>
      <div className="container cams-container">
        <div className="row">
          { spotsList.map(item => (
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