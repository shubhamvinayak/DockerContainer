node {
   def commit_id
   stage('Preparation') {
     checkout scm
     bat "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('Build'){
    bat  "docker images"
      withDockerContainer("node:8"){
       bat "npm install"  
      }
   }

}
