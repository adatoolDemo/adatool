 <h2>Basic process of Calling Pa11y from Local Project to check</h2>
  <h3>Add in Package.Json</h3>
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
  </ul>
  <h3>Run the NPM install</h3>
  <ul>
    <li>
        npm install
    </li>
  </ul>
  <h3>Add in Package.Json Script</h3>
  <ul>
    <li>
        "accessibility": "npm run pa11y || npm run pa11y:report\""
    </li>
    <li>
        "pa11y": "pa11y-ci --config .pa11y-ci.json"
    </li>
    <li>
        "pa11y:report": "open reports/index.html"
    </li>
  </ul>

<h3>Add a new file with name .pa11y-ci.json</h3>
<p>add the action according to your work</p>
{
    defaults: {
      standard: WCAG2AA,
      runners: [
        axe
      ],
      reporters: [
        cli,
        [
          pa11y-ci-reporter-html,
          {
            destination: ./reports
          }
        ]
      ],
      chromeLaunchConfig: {
              args: [
                  --no-sandbox
              ]
          }
    },
   <b> urls: [
      {
        url: http://localhost:4200,
        actions: [
          navigate to http://localhost:4200
        ]
      }
    ]
    </b>
  }
<p>Please find the the file and add the config in URLs</p>

<h3>Run Npm accessibility command</h3>
<p>npm run accessibility  - run it in different terminal</p>
<p>Download from Report folder</p>
