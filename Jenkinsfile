
pipeline {
    agent any
    environment {
    PATH = "/opt/homebrew/bin:${env.PATH}"
}

    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'test -f dist/build.txt'
                echo 'Test passed!'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'dist/build.txt', fingerprint: true
            }
        }
    }
}
