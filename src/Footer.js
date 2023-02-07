import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">שידור חי מחופים שונים מרחבי הארץ ומאתר החרמון</p>
            <ul>
            <li><a href="/north">צפון</a></li>
            <li><a href="/center">מרכז</a></li>
            <li><a href="/south">דרום</a></li>
            <li><a id="hermonLink" href="/hermon">חרמון</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer