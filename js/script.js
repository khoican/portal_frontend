import './app';

const tableIn = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
const url = "http://localhost:3000/in"

async function getData() {
    await fetch(url)
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
                        tbody.innerHTML = output
                    })
                })
        })
        .catch(error => console.log(error))
}

getData();

