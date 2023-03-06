let data = localStorage.getItem('sessions')
divData = document.createElement('div')
    divData.innerText = data
document.body.append(divData)
divData.style.width = '700px'