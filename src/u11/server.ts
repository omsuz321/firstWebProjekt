
import { DOMParser } from "https://esm.sh/linkedom";// implementaiton of dom by deno
import { assert } from "https://deno.land/std@0.211.0/assert/mod.ts";
import { Node } from "https://esm.sh/linkedom@0.16.6";
    type aggregator = "min" | "max" | "average"
    const port = 8080; // Specify the port you want to use
    Deno.serve({ port  },(_req) => new Response("Hello, world"));

 
    
    async function fetchData(url: string): Promise<Node[]> {
        const decoder = new TextDecoder("utf-8");
        const doc = await  Deno.readFile(url);
        console.log(decoder.decode(doc));
        const xml = new DOMParser().parseFromString(decoder.decode(doc), "text/xml")!;
        return Array.from(xml.querySelectorAll("baustein"));               
        
    }

    async function getAggregator(aggregator: aggregator, url: string ): Promise<number>{
        const data = await fetchData(url);
        if(aggregator === "min"){
            return await 1;
        }else if(aggregator === "max"){
            return await 2;
        }else if(aggregator === "average"){
            return await 3;
        }else{
            return await 4;
        }
        
    }
                                                                        
console.log( await getAggregator("min", `../u10/data.xml`));



//deno test --allow-net server.ts 
/**
 * had problems to find the rightg domParser implementation for tha
 * the 
 */