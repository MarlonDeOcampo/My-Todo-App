pipeline {
    agent { label "${params.agent_label }" }
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
        stage('Clean Workspace') {
            steps {
                deleteDir() 
            }
        }
        stage('Checkout Code') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/MarlonDeOcampo/My-Todo-App.git',
                        credentialsId: "github_token"
                    ]]
                ])
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
                    docker.withRegistry('https://index.docker.io/v1/', 'hub_creds') {
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
