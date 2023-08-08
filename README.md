# How to configure pa11y in Project – using Sitemap

1.	Install below dependencies and update scripts in package.json
Package.json

DevDependencies:

"pa11y-ci": "^3.0.1",
"pa11y-ci-reporter-html": "^5.0.4",

Scripts:

 "test:accessibility": "npm run pa11y || npm run pa11y:report\"",
 "pa11y": "pa11y-ci --reporter=pa11y-ci-reporter-html --sitemap http://localhost:3000/sitemap.xml",
 "pa11y:report": "open reports/index.html"

Note: http://localhost:3000/sitemap.xml  is your local sitemap url.

2.	Run your local application in first terminal 
3.	Run below command in command second terminal

npm run test:accessibility

4.	After running the above command ADA issues are reported in the html page – 
This html page will be saved in reports folder which also gets created in the repo.

Note: Report generation process will take time depending on how big your sitemap file. 
