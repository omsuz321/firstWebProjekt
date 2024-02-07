async function retrieveData({ urls = ["http://127.0.0.1:5500/src/u8/A.txt", "http://127.0.0.1:5500/src/u8/B.txt"], retrieveMethod = retrieveViaPromise, dataFormat = "json" } = {}) {
  return await retrieveMethod({"urls":urls, "dataFormat": dataFormat});
}

export function retrieveViaPromise({urls, dataFormat}) {
  return Promise.all(
    urls.map(url =>
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
          }
          return response[dataFormat]();
        })
    )
  );
}

export async function retrieveViaAwait({urls, dataFormat}) {
  const responses = [];
  
  try {
    for (const url of urls) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      const data = await response[dataFormat]();
      responses.push(data);
    }
    
    return responses;
  } catch (error) {

    console.error('Error fetching data:', error);
    throw error;
  }
}



export async function getLines(){
    return await retrieveData({dataFormat: "text"})
                    .then( ([a,b]) =>{
                        const text1 = a.split('\n');
                        const text2 = b.split('\n');
                        return  `${text1[0]} ${text2[text2.length -2]}`
                        
                        
                    }

                    );


}
//retrieveViaAwait({ urls: ["http://127.0.0.1:5500/src/u8/A.txt", "http://127.0.0.1:5500/src/u8/B.txt"],  dataFormat: "text"}).then((output)=> console.log(output));
getLines().then((a) => console.log(a))