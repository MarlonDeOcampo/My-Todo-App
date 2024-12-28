pipeline {
    agent {
        docker {
            image 'alhon05/jenkins-agent:v1' // Replace with the Docker image used in your Docker Cloud configuration
            label 'docker-agent' // Match the label from your Docker Cloud setup
            registryUrl 'https://index.docker.io/v1/' // Docker registry URL (e.g., Docker Hub)
            registryCredentialsId 'a5c3815e-5cd4-4edd-b1ff-cb23667a6aa9' // Replace with the credentials ID from Jenkins
            args '--host=tcp://192.168.1.5:4243'
        }
    }
    options {
        skipDefaultCheckout(true)
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
    }
    environment {
        WORKSPACE_DIR = '/home/jenkins/workspace' 
    }
    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir() 
            }
        }
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t my-todo-app:latest .
                '''
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'your-credentials-id') {
                        sh 'docker push my-todo-app:latest'
                    }
                }
            }
        }
        stage('Clean Local Docker Images') {
            steps {
                sh 'docker system prune -af || true'
            }
        }
    }
    post {
        success {
            echo "Pipeline completed successfully in ${WORKSPACE_DIR}!"
        }
        failure {
            echo "Pipeline failed. Check logs in ${WORKSPACE_DIR}."
        }
        always {
            cleanWs() // Clean workspace in /home/jenkins
        }
    }
}
