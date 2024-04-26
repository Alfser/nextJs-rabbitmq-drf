declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: string
        MQ_USER: string
        MQ_PASSWORD: string
        MQ_HOST: string
        MQ_PORT: string
    }
}