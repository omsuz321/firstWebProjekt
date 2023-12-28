import { DOMParser } from 'xmldom';
function fetchData(x) {
    return fetch("http://127.0.0.1:5500/src/u10/data.xml")
        .then((result) => {
        return result.text();
    })
        .then((text) => {
        const xml = new DOMParser().parseFromString(text, "text/xml");
        let data = Array.from(xml.querySelectorAll("baustein"));
        console.log(data);
        return 1;
    });
}
fetchData("min");
