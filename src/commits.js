const axios = require('axios')

const user = 'Marzeu'
let count = 0

async function getCommitsCount() {
    let response = await axios.get(`https://api.github.com/users/${user}/repos`)
    for (element of response.data) {
        let commitResponse = await axios.get(`https://api.github.com/repos/${user}/${element.name}/commits`)
        count += commitResponse.data.length
    }
    console.log(count)
}

getCommitsCount()