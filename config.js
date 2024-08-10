import { config } from 'dotenv'

config()

export const {
    PORT = 3000,
    TIMEKIT_API_KEY = process.env.TIMEKIT_API_KEY,
    TIMEKIT_PROJECT_ID = process.env.TIMEKIT_PROJECT_ID,
} = process.env

