function fetchData(x, url) {
    return fetch(url)
        .then((result) => {
        return result.text();
    })
        .then((text) => {
        //const xml = new DOMParser().parseFromString(text, "text/xml");
        //let data = Array.from(xml.querySelectorAll("baustein"));
        console.log(text);
        return 1;
    });
}
//fetchData("min",  "http://127.0.0.1:5500/src/u10/data.xml");
fetchData("min", "../10/data.xml");
export {};
