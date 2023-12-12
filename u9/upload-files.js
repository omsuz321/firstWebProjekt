


async function retrieveData({ urls = ["http://127.0.0.1:5531/u9/A.txt", "http://127.0.0.1:5531/u9/B.txt"], retrieveMethod = retrieveViaPromise, dataFormat = "json" } = {}) {
  return await retrieveMethod({"urls":urls, "dataFormat": dataFormat});
}

function retrieveViaPromise({urls, dataFormat}) {
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

 function retrieveTextViaAsync({urls, dataFormat}) {
  let data = Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response[dataFormat](); //  dataFormate = json, text
    })
  );

  return data;
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



getLines().then(result => console.log(result));