import React from 'react'

function South() {
  
  const spotsList = [
    {"spotName":"אשדוד חוף הקשתות", "src": "https://www.youtube.com/embed/gBkbocUIbIs", "title": "שידור חי מחוף הקשתות אשדוד"},
    {"spotName":"אשדוד חוף השובר", "src": "https://www.youtube.com/embed/hWwLAaO0Vyo", "title": "שידור חי מחוף השובר אשדוד"},
    {"spotName":"אשדוד חוף יא'", "src": "https://www.youtube.com/embed/EMtbSADjIWk", "title": "שידור חי מחוף יא' אשדוד"},
    {"spotName":"אשדוד חוף מי עמי", "src": "https://www.youtube.com/embed/n221k-BmZ70", "title": "שידור חי מחוף מי עמי אשדוד"},
    {"spotName":"אשדוד חוף המצודה", "src": "https://www.youtube.com/embed/KhEmwNERRZc", "title": "שידור חי מחוף המצודה אשדוד"},
    {"spotName":"אשדוד חוף לידו", "src": "https://www.youtube.com/embed/ywRpnpbowXc", "title": "שידור חי מחוף לידו אשדוד"},
    {"spotName":"אשדוד חוף גיל", "src": "https://www.youtube.com/embed/G-58yVcuN5E", "title": "שידור חי מחוף גיל אשדוד"},
    {"spotName":"אשדוד חוף אורנים", "src": "https://www.youtube.com/embed/qW72_krx7Ko", "title": "שידור חי מחוף אורנים אשדוד"},
    {"spotName":"אשדוד חוף באר שבע ט'ו", "src": "https://www.youtube.com/embed/9FyEZTWkTs8", "title": "שידור חי מחוף באר שבע אשדוד"},
    {"spotName":"אשקלון", "src": "https://g2.ipcamlive.com/player/player.php?alias=604e3af5bbeac", "title": "שידור חי מחוף אשקלון"},

  ]
  
  
  return (
    <div>
      <div className="container cams-container">
        <h3>מצלמות גלים מהדרום</h3>
      </div>
      <div className="container cams-container">
        <div className="row">
          { spotsList.map(item => (
            <div className="col-xs-12 col-lg-6">
            <div className="card">
              <h1 className="card-title">{item.spotName}</h1>
              <iframe src={item.src} title={item.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} quality="high"></iframe>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default South