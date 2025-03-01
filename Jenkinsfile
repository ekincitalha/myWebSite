pipeline {
    agent any
    tools {
            nodejs 'NodeJS' // Daha önce Global Tool Configuration'da verdiğiniz adı kullanın
        }
   
    stages {
        stage('Checkout') {
            steps {
                // Git reposunu çekiyoruz
                git 'https://github.com/ekincitalha/myWebSite.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Docker image'ını build ediyoruz
                    docker.build("talhaekinci/mywebsite-app:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Docker imajını Docker Hub'a push ediyoruz
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        docker.image("talhaekinci/mywebsite-app:latest").push()
                    }
                }
            }
        }

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
