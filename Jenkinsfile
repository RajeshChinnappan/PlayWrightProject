pipeline {
   agent any
  stages {
      stage('e2e-tests') {
         steps {
           bat 'npm ci'
            bat 'npx playwright test'
         }
       }
  
// stage('Take Screenshot') {
//             steps {
//                 script {
//                               // Download and install Chromium for Windows
//             bat 'choco install chromium'
            
//             // Take screenshot using Chromium
//             bat "start /WAIT /B chromium --headless --disable-gpu --screenshot=${WORKSPACE}\\screenshots\\screenshot.png https://www.google.com/"

//                                     }

//             }


//         }
}


post {
   always{
      script {

                
               def htmlFilePath = "${WORKSPACE}/playwright-report/index.html"
               echo "HTML File Path: ${htmlFilePath}"

                def htmlContent = readFile(htmlFilePath).trim()
                echo "HTML Content: ${htmlContent}"

              //  emailext ( attachmentsPattern: "${htmlContent}", to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com', subject: 'Build Notification with HTML Report', body: "${htmlContent}", mimeType: 'text/html',replyTo: '$DEFAULT_RECIPIENTS')

                emailext ( body: '${FILE, path="${WORKSPACE}/playwright-report/index.html"}', mimeType: 'text/html', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com', subject: 'Build Notification with HTML Report', body: "${htmlContent}", mimeType: 'text/html',replyTo: '$DEFAULT_RECIPIENTS')

    //attachmentsPattern: '**/index.html', // Assuming the HTML file is named index.html

    //compressAttachments: true // Compress the attached HTML file




     //    def reportPath = "${WORKSPACE}/playwright-report/index.html"
       //  def crumb = sh(script: "curl -s 'http://localhost:8080/crumbIssuer/api/xml' | grep -oP '(?<=<crumb>).*(?=</crumb>)'", returnStdout: true).trim()
         //       def screenshotPath = "${WORKSPACE}/ws/screenshots/screenshot.png"

           //     sh "chromium-browser --headless --screenshot=${screenshotPath} ${BUILD_URL}/ws/C:/Users/rajesh.c/.jenkins/workspace/PlaywrightProjectEndToEndTesting/playwright-report/index.html"
         
// emailext (

//                     to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com',

//                     subject: 'Build Notification with HTML Report Screenshot',

//                     body: """<p>Dear User,</p>

//                             <p>The build is complete. Here is the HTML report screenshot:</p>

//                             <p><img src='cid:report-screenshot'></p>""",

//                     mimeType: 'text/html',

//                     replyTo: '$DEFAULT_RECIPIENTS',

//                     attachmentsPattern: screenshotPath,

//                     attachLog: true,

//                     headers: [

//                         [name: 'Jenkins-Crumb', value: crumb]

//                     ]

//                 )

         // allure ([
         //    includeProperties: false, jdk: '', results: [[path: 'allure-results']]   
         // ])
        // def reportPath = "C:\\Users\\rajesh.c\\.jenkins\\workspace\\PlaywrightProjectEndToEndTesting\\playwright-report\\index.html";
       //  def reportPath = "${WORKSPACE}/playwright-report/index.html"


      // def html_body = bat(script: "type C:\\Users\\rajesh.c\\.jenkins\\workspace\\PlaywrightProjectEndToEndTesting\\playwright-report\\index.html", returnStdout: true).trim()
         // echo reportPath
         // def htmlToImage = """
         //            const { chromium } = require('playwright');

         //            (async () => {
         //                const browser = await chromium.launch();
         //                const page = await browser.newPage();
         //                await page.goto('file://${reportPath}');
         //                const imageBuffer =  await page.screenshot({});
         //                await browser.close();
         //            })();
         //        """
         //          await writeFile('rendered.png', imageBuffer);
         //           echo 'rendered.png'
            //    writeFile file: 'htmlToImage.js', text: htmlToImage
            //    bat 'npm install playwright'
            //   // bat 'node htmlToImage.js'
            //     echo 'screenshot.png'
      // emailext(subject: "Subject",to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com',mimeType: 'text/html',body: "${html_body}")
        // echo html_body
        //  emailext(attachmentsPattern:'playwright-report/index.html',body: '', subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com')
      //    emailext(attachmentsPattern:'playwright-report/index.html',body: """<p><a href="${BUILD_URL}/path/to/index.html">HTML Report</a></p>""", mimeType: 'text/html',subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com')
        //  emailext(attachmentsPattern:'screenshots/screenshot.png',body:"""<img src = "C:/Users/rajesh.c/Documents/Playwright/screenshots/screenshot.png" alt = "report" >""", mimeType: 'text/html',subject: 'PlaywrightReport', to: 'playwrightdemotesting@gmail.com,rajesh.c@reflectionsinfos.com,rajeshc2391@gmail.com')
      }
          
        }

}
    

}
