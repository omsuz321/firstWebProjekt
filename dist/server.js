import { DOMParser } from "https://esm.sh/linkedom";
async function fetchData(url) {
    const decoder = new TextDecoder("utf-8");
    const doc = await Deno.readFile(url);
    const xml = new DOMParser().parseFromString(decoder.decode(doc), "text/xml");
    return Array.from(xml.querySelectorAll("wert "), (element) => parseFloat(element.textContent || '0'));
}
async function getAggregator(aggregator1, url) {
    const data = await fetchData(url);
    if (data.length < 1) {
        console.error("No data in document given");
        return 0; // Handle this case according to your requirements
    }
    if (aggregator1 === "min") {
        return Math.min(...data);
    }
    else if (aggregator1 === "max") {
        return Math.max(...data);
    }
    else if (aggregator1 === "average") {
        const sum = data.reduce((acc, val) => acc + val, 0);
        return sum / data.length;
    }
    else {
        console.error(`"${aggregator1}" is not a member of "aggregator"`);
        return Infinity;
    }
}
console.log(await getAggregator("average", `../u10/data.xml`));
