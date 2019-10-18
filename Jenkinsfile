node {
   def commit_id
   stage('Preparation') {
     checkout scm
     bat "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('Build'){
   docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
       bat 'docker --version'
		bat 'docker images'
     }      
  }
   

}
