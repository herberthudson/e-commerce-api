import { app } from './app'
const port = parseInt(process.env.APP_PORT as string) || 3000
app.listen(port)
