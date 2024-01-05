function fetchData(x, url) {
    return fetch(url)
        .then(function (result) {
        return result.text();
    })
        .then(function (text) {
        var xml = new DOMParser().parseFromString(text, "text/xml");
        var data = Array.from(xml.querySelectorAll("baustein"));
        // console.log(text);
        return data;
    });
}
fetchData("min", "http://127.0.0.1:5500/src/u10/data.xml");
//fetchData("min",  "http://localhost:63342/firstWebProjekt/src/u10/data.xml");
