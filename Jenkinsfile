    pipeline {
    agent any

    stages {
        // Parar los servicios que ya existen o en todo caso hacer caso omiso
        stage('Parando los servicios...') {
            steps {
                sh '''
                    docker compose -p adj-demo down || true
                '''
            }
        }

        // Eliminar las imágenes creadas por ese proyecto
        stage('Eliminando imágenes anteriores...') {
            steps {
                sh '''
                    docker images --filter "label=com.docker.compose.project=adj-demo" -q | xargs -r docker rmi -f || echo "No hay imagenes por eliminar"
                '''
            }
        }

        // Del recurso SCM configurado en el job, jala el repo
        stage('Obteniendo actualización...') {
            steps {
                checkout scm
            }
        }

        // Construir y levantar los servicios
        stage('Construyendo y desplegando servicios...') {
            steps {
                sh '''
                    docker compose up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado con éxito'
        }

        failure {
            echo 'Hubo un error al ejecutar el pipeline'
        }

        always {
            echo 'Pipeline finalizado'
        }
    }
}

