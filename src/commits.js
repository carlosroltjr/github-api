const axios = require('axios')

const user = 'carlosroltjr'
let count = 0

axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
        response.data.forEach(element => {
            axios.get(`https://api.github.com/repos/${user}/${element.name}/commits`)
                .then(response => {
                    count += response.data.length
                    console.log(count)
                })
        })
    })
