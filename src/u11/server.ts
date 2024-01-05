

    type aggregator = "min" | "max" | "average"



    function fetchData(x: aggregator, url: string): Promise<Element[]> {
        return fetch(url)
                .then((result) => {
                    return result.text();
                    
                })
                .then((text) => {
                    const xml = new DOMParser().parseFromString(text, "text/xml");
                    let data = Array.from(xml.querySelectorAll("baustein"));
                   // console.log(text);
                    

                    return data;
                });
        }



        fetchData("min",  "http://127.0.0.1:5500/src/u10/data.xml");
    //fetchData("min",  "http://localhost:63342/firstWebProjekt/src/u10/data.xml");


                    