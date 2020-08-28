import App from './index'

const app = new App({
    port: 3001,
    controllers: [],
    middleWares: []
})

app.listen()