import dotenv from 'dotenv'

dotenv.config()

export default {
    app:            process.env.APP             || 'dev',
    port:           process.env.PORT            || '5000'
}
