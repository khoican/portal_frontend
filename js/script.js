const tbodyIn = document.querySelector('#tbody-in');
const tbodyOut = document.querySelector('#tbody-out');
let form = document.querySelectorAll('form');
const urlIn = "http://localhost:3000/portal/in";
const urlOut = "http://localhost:3000/portal/out";

async function getDataIn() {
    await fetch(urlIn)
        .then(res => { 
            res.json()
                .then(data => {
                    const dataJson = data.data
                    let no = 1
                    let output = ``
                    
                    dataJson.map((result) => {
                        let time = result.waktu;
                        let newTime = time.replace("T", " - ").replace(".000Z", "");

                        output += `
                            <tr>
                                <td>${ no++ }</td>
                                <td>${ result.nama }</td>
                                <td>${ result.kompi }</td>
                                <td>${ newTime }</td>
                                </tr>
                        `
                        tbodyIn.innerHTML = output;
                    })
                })
            })
        .catch(error => console.log(error))
}
getDataIn();    
    
function postDataIn() {
    form[0].addEventListener('submit', function(e) {
        e.preventDefault();
        
        let namaMasuk = document.querySelector('#nama').value;
        let kompiMasuk = document.querySelector('#kompi').value;
        
        let response = {
            nama: namaMasuk,
            kompi: kompiMasuk
        }

        fetch(`${urlIn}/post`, {
            method: 'POST',
            body: JSON.stringify(response),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))

        location.reload()
    })
}
postDataIn();


async function getDataOut() {
    await fetch(urlOut)
        .then(res => { 
            res.json()
                .then(data => {
                    const dataJson = data.data
                    let no = 1
                    let output = ``
                    
                    dataJson.map((result) => {
                        let time = result.waktu;
                        let newTime = time.replace("T", " - ").replace(".000Z", "");

                        output += `
                            <tr>
                                <td>${ no++ }</td>
                                <td>${ result.nama }</td>
                                <td>${ result.kompi }</td>
                                <td>${ newTime }</td>
                            </tr>
                        `
                        tbodyOut.innerHTML = output;
                    })
                })
            })
        .catch(error => console.log(error))
}
getDataOut();

function postDataOut() {
    form[1].addEventListener('submit', function(e) {
        e.preventDefault();
        
        let namaMasuk = document.querySelector('#nama1').value;
        let kompiMasuk = document.querySelector('#kompi1').value;
        
        let response = {
            nama: namaMasuk,
            kompi: kompiMasuk
        }

        fetch(`${urlOut}/post`, {
            method: 'POST',
            body: JSON.stringify(response),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))

        location.reload()
    })
}
postDataOut();