pipeline {
    agent { label 'docker-agent' }

    environment {
        REPO_URL = 'https://github.com/MarlonDeOcampo/My-Todo-App.git'
        BRANCH_SPEC = '*/main'
        DOCKERFILE_DIR = './'
        DOCKER_CLOUD = 'docker_cloud'
        REGISTRY_CREDENTIALS = 'zyncouno/*****'
        IMAGE_NAME = 'my-todo-app'
    }

    options {
        skipDefaultCheckout(true)
        buildDiscarder(logRotator(numToKeepStr: '5'))
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: BRANCH_SPEC]],
                    userRemoteConfigs: [[url: REPO_URL]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('', REGISTRY_CREDENTIALS) {
                        def appImage = docker.build("${IMAGE_NAME}", DOCKERFILE_DIR)
                        appImage.push('latest')
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
        always {
            cleanWs()
        }
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
