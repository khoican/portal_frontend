function getData() {
    fetch("http://localhost:3000/in")
        .then(res => { return res.json(); })
        .then(data => { console.log(data.data); })
        .catch(error => console.log(error))
}

getData();