import React from 'react'

function North() {
  const spotsList = [
    {"spotName":"פולג", "src": "https://g2.ipcamlive.com/player/player.php?alias=620e738bdcc00&amp;autoplay=1", "title": "שידור חי מחוף פולג"},
    {"spotName":"מעגן מיכאל", "src": "https://ipcamlive.com/player/player.php?alias=5b17c8292282c&amp;autoplay=1&amp;skin=white&amp;hidelink=true&amp;disablereportbutton=true&amp;", "title": "שידור חי מחוף מעגן מיכאל"},	
    {"spotName":"חיפה נירוונה", "src": "https://g2.ipcamlive.com/player/player.php?alias=60acaa1aeee83&amp;autoplay=1", "title": "שידור חי מחוף נירוונה בחיפה"},	
    {"spotName":"חיפה בקדור", "src": "https://g2.ipcamlive.com/player/player.php?alias=5ffd9eb29b665", "title": "שידור חי מחוף הבקדור בחיפה"},	
    {"spotName":"חיפה החוף השקט", "src": "https://v.angelcam.com/iframe?v=1eyopj51l8&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJoYWlmYXNhaWwuY2xpY2syc3RyZWFtLmNvbSIsImNhbWVyYV9pZCI6NTcwMTksImV4cCI6MTY3NTk0NTczMX0.oUS9kJFexDX0lSPSKwPTCDPCNU6v3gCmPHkEfp7nXPQ&amp;autoplay=1", "title": "שידור חי מהחוף השקט בחיפה"},	
    {"spotName":"קריית ים", "src": "https://www.youtube.com/embed/vhaEGwlNJyw", "title": "שידור חי מחוף קריית ים"},	

  ]
  
  return (
    <div>
      <div className="container cams-container">
        <h3>מצלמות גלים מהצפון</h3>
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
        </div>
      </div>
    </div>
  )
}

export default North