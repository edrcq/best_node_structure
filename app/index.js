const { startMongo } = require('./mongo')

let app = null; 

async function initApp () {
    startMongo(function(err) {
        if (err) {
            console.error(err);
            process.exit(1)
            return ;
        }
        app = require('./server')
    })
}

initApp ()