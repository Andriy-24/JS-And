let url = new URL(location.href)
let urlJson = url.searchParams.get('id')
id = JSON.parse(urlJson)

fetch('http://jsonplaceholder.typicode.com/users/'+id)
.then(value => value.json())
.then(user => {
    let divUser = document.createElement('div')
    divUser.innerText = `Id: ${user.id}
    Name: ${user.name}
    Username: ${user.username}
    Email: ${user.email}
    Address:
    Street: ${user.address.street}
    Suite: ${user.address.suite}
    City: ${user.address.city}
    Zipcode: ${user.address.zipcode}
    Geo:
    lat: ${user.address.geo.lat}
    lng: ${user.address.geo.lng}}
    Phone: ${user.phone}
    Website: ${user.website}
    Company:
    Name: ${user.company.name}
    CatchPhrase: ${user.company.catchPhrase}
    Bs: + ${user.company.bs}`

    document.body.appendChild(divUser)
})