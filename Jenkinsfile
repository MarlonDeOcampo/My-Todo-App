pipeline {
    agent none
    environment {
        DOCKER_HOST = 'tcp://192.168.1.5:4243'
        WORKSPACE_DIR = '/home/jenkins/workspace' 
    }
    parameters {
        choice(
            name: 'agent_label',
            choices: 'docker-agent\nk8s-agent\nlinux-agent',
            description: 'Choose the agent label for the build'
        )
    }
    stages {
        stage('Initialize') {
            agent { label params.agent_label } // Dynamically set agent label
            steps {
                echo "Running on agent: ${params.agent_label}"
            }
        }
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
        stage('Deploy to Docker Swarm') {
            steps {
                sh '''
                sshpass -p 'kayle@zhane' ssh -p 33063 marlon@192.168.1.5 docker stack deploy --compose-file /home/marlon/todostack.yml my-todo-app-stack
                '''
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
