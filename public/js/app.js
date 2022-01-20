console.log('Client side javascript is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageFirst = document.querySelector('#message-1')
const messageSecound = document.querySelector('#message-2')


// messageFirst.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log(location)

    messageFirst.textContent = 'Loading...'
    messageSecound.textContent = ''

    const url = 'http://localhost:3000/weather?address=' + location

    fetch(url).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageFirst.textContent = data.error
            } else {
                messageFirst.textContent = data.location
                messageSecound.textContent = data.forecast
            }
        })
    })

})