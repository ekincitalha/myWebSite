pipeline {
    agent any
    tools {
            nodejs 'NodeJS'
        }
   
    stages {
        stage('Checkout') {
            steps {
                // Git reposunu çekiyoruz
                git branch: 'main', url: 'https://github.com/ekincitalha/myWebSite.git'
            }
        }
        stage('Check Docker Version') {
            steps {
                script {
                   powershell 'docker --version'
                }
            }
        }
         stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Bağımlılıkları yükleyin
                    sh 'yarn install'
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    // React uygulamasını build edin
                    sh 'yarn build'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                     docker.build('talhaekinci/mywebsite-app:latest')
                }
            }
        }

        // stage('Push Docker Image') {
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', 'docker-credit') {
        //                 docker.image("talhaekinci/mywebsite-app:latest").push()
        //             }
        //         }
        //     }
        // }
        

        // stage('Deploy to Server') {
        //     steps {
        //         script {
        //             // Docker container'ını çalıştırıyoruz (remote sunucuda)
        //             sh """
        //             ssh -o StrictHostKeyChecking=no user@your-server-ip 'docker pull talhaekinci/mywebsite-app:${env.BUILD_ID} && docker run -d -p 80:3000 --name react-app talhaekinci/mywebsite-app:${env.BUILD_ID}'
        //             """
        //         }
        //     }
        // }
    }

    post {
        success {
            echo 'Pipeline başarıyla tamamlandı!'
        }
        failure {
            echo 'Pipeline başarısız oldu!'
        }
    }
}
