 <h2>Basic Integration process with ADA Tool</h2>
   <h3>Run the NPM install</h3>
  <ul>
    <li>
        npm install
    </li>
  </ul>
  <h4>Within Package.Json, Below is a list of packages that should be available</h4>
  <ul>
    <li>
        "pa11y": "^6.2.3",
    </li>
    <li>
        "pa11y-ci": "^3.0.1"
    </li>
    <li>
        "pa11y-ci-reporter-html": "^5.0.4"
    </li>
    <li>
       "concurrently": "^7.6.0"
    </li>
  </ul>

  <h3>Run NPM Command</h3>
  <ul>
   <li>npm run Adatest</li>
  </ul>
  <h4>The commands listed below should be available in the script</h4>
  <ul>
   <li>"accessibilityTest": "npm run pa11y || npm run pa11y:report\""</li>
   <li>"pa11y": "pa11y-ci --config pa11y-ci.json"</li>
   <li>"pa11y:report": "start reports/index.html"</li>
   <li>"pa11y:reportLinux": "open reports/index.html" <b><i> This command is for Linux system </i></b></li>
   <li>"Adatest": "concurrently \"npm start\" \"npm run pa11y || npm run pa11y:report\""</li>
  </ul>

  <h2>Update pa11y-ci.json Config File</h2>
  <ul>
   <li>Update URLs as per projects urls</li>
   <b> urls: [
      {
        url: http://localhost:4200,
        actions: [
          navigate to http://localhost:4200
        ]
      }
    ]
    </b>
  </ul>
<h2>Configure pa11y in Project – using Sitemap</h2>
<ul>
 <li>Note: http://localhost:3000/sitemap.xml is your local sitemap url.</li>
     "pa11ySiteMap":"pa11y-ci --reporter=pa11y-ci-reporter-html --sitemap http://localhost:3000/sitemap.xml"
 <li>Replace pa11y in Adatest </li>
</ul>
