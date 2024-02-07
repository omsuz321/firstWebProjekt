import { insertContent } from "../u5/CommonFunction.js";


export function insertContentWithModule(element, contentProperty, content){
    insertContent(element, contentProperty, content);
}




export async function getFileFromServer(fileLocation, fileType = "text"){
  return await fetch(`http://127.0.0.1:5500/src/${fileLocation}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response[fileType](); // or response.blob() if you want to handle binary data
          })
          .then(content => {
            // Use the fetched content here
            console.log(content);
            return content;
          })
          .catch(error => {
            console.error(`There was a problem fetching the ${fileType} file:`, error);
          });

}

export  function insertFileIntoElement({fileLocation ,element}){
  getFileFromServer(fileLocation)
  .then(content => {
    element.contentWindow.document.open()
    element.contentWindow.document.write(content);
  })
}



//insertFileIntoElement({fileLocation: "u0/currentDate.html", elementID: "targetElement"});
//getFileFromServer("u0/currentDate.html");




