import App from './index'

const app = new App({
    port: 5000,
    controllers: [],
    middleWares: []
})

app.listen()