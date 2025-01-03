pipeline {
    agent { label 'docker-agent' }
    environment {
        DOCKER_HOST = 'tcp://192.168.1.5:4243'
        WORKSPACE_DIR = '/home/jenkins/workspace' 
    }
    parameters {
        choice(
            name: 'build options',
            choices: 'checkout\nbuild\npush\ndeploy'
        ) 
    }
    stages {
        stage('Clean Workspace') {
            steps {
                docker service ls
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
                docker build -t alhon05/my-todo-app:${BUILD_NUMBER} .
                '''
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'a5c3815e-5cd4-4edd-b1ff-cb23667a6aa9') {
                        sh 'docker push alhon05/my-todo-app:${BUILD_NUMBER}'
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
