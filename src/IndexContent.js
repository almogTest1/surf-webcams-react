import React from 'react'
import north from './vendor/media/image.webp'
import south from './vendor/media/south.webp'
import center from './vendor/media/Dromi.webp'
import hermon from './vendor/media/hermon.webp'

function IndexContent() {
  return (
    <div className="container">
        <header className="jumbotron my-4">
          <h1 className="display-3">מצלמות חופים</h1>
          <p className="lead">שידור חי מחופים שונים מרחבי הארץ ומאתר החרמון</p>
        </header>

        <div className="row">
          <div className="col-xs-12 col-lg-4 col-xl-3">
            <div className="card">
              <a className="cameraPageLink" href="/north" title="מצלמות חופים מצפון הארץ: נהריה-הרצליה">
                <img className="card-image img-responsive card-img-top" src={ north } alt="צפון הארץ" />
                <div className="card-body">
                  <h4 className="card-title">צפון</h4>
                  <p className="card-text">מצלמות חופים מצפון הארץ: נהריה-הרצליה</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4 col-xl-3">
            <div className="card">
              <a className="cameraPageLink" href="/center" title="מצלמות חופים ממרכז הארץ: הרצליה-ראשון לציון">
                <img className="card-image img-responsive card-img-top" src={ center } alt="מרכז הארץ" />
                <div className="card-body">
                  <h4 className="card-title">מרכז</h4>
                  <p className="card-text">מצלמות חופים ממרכז הארץ: הרצליה-ראשון לציון</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4 col-xl-3">
            <div className="card">
              <a className="cameraPageLink" href="/south" title="מצלמות חופים מדרום הארץ: אשדוד ודרומה">
                <img className="card-image img-responsive card-img-top" src={ south } alt="דרום הארץ" />
                <div className="card-body">
                  <h4 className="card-title">דרום</h4>
                  <p className="card-text">מצלמות חופים מדרום הארץ: אשדוד ודרומה</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-xs-12 col-lg-4 col-xl-3">
            <div className="card">
              <a className="cameraPageLink" href="/hermon" title="מצלמות אתר החרמון">
                <img className="card-image img-responsive card-img-top" src={ hermon } alt="חרמון" />
                <div className="card-body">
                  <h4 className="card-title">אתר החרמון</h4>
                  <p className="card-text">מצלמות אתר החרמון</p>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default IndexContent