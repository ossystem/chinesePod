node {
    checkout scm

    def image

    stage("build") {
        docker.withRegistry("https://docker.ossystem.ua") {
            image = docker.build("chinese-pod:${env.BUILD_TAG}", ".")
            image.push()
        }
    }

    stage("test images") {
        sh "echo they are fine, I hope"
    }

    stage("deploy") {
        timeout(time: 180, unit: 'SECONDS') {
            withEnv([
                "IMAGE_NAME=docker.ossystem.ua/${image.id}",
                "ENV=${env.BRANCH_NAME}",
            ]) {
                kubernetesDeploy configs: 'kubernetes.yml', kubeconfigId: 'kuber-landing-kubeconfig'
            }
        }
    }
}
