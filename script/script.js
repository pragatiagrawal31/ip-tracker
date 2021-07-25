const secret_api ='at_QTN5G3lCt6hf1LkTDGZUutpXPoLHo'
const api_uri = 'https://geo.ipify.org/api/'
let current_verion = 'v1'

// elements to update
let current_ip = document.getElementById('current_ip')
let current_town = document.getElementById('current_town')
let current_zone = document.getElementById('current_zone')
let current_isp = document.getElementById('current_isp')

// form elements
const entered_ip = document.getElementById('ip_address')
const search_btn = document.getElementById('search_btn')


const map = L.map('display-map', {
    'center': [0,0],
    'zoom': 0,
    'layers': [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          })
    ]
})

updateMarker = (update_marker) => {
    map.setView(update_marker, 13);
    L.marker(update_marker).addTo(map);
}


async function fetchDetails(default_ip)
{
    try{
        if(default_ip == undefined){
            var ip_url = `${api_uri}${current_verion}?apiKey=${secret_api}`
        }
        else {
            var ip_url = `${api_uri}${current_verion}?apiKey=${secret_api}&ipAddress=${default_ip}`
        }
        const res = await fetch(ip_url);
        const data = await res.json();
        current_ip.innerHTML = data.ip
        current_town.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
        current_zone.innerHTML = `UTC ${data.location.timezone}`
        current_isp.innerHTML = data.isp

        // update map marker
        updateMarker([data.location.lat, data.location.lng])
    }
    catch(error){
        fetchDetails();
        alert("Unable to get IP details")
        console.log(error)
    }
}


document.addEventListener('load', fetchDetails())

search_btn.addEventListener('click', e => {
    e.preventDefault()
    if (entered_ip.value != '' && entered_ip.value != null) {
        fetchDetails(entered_ip.value)
        return
    }
    alert("Please enter a valid IP address");
})