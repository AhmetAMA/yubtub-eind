// class API{
//     async getData(url) {
//         let dataToBeReturned = {}
//         await fetch(url).then(
//             (response) => {
//                 return response.json();
//             }
//         ).then((data) => {
//             dataToBeReturned = data.data;
//         })
//         return dataToBeReturned;
//     }
// }

class Api {
    constructor() {
      this.getData();
    }
  
    async getData() {
      const response = await fetch("./src/data/data.json");
      const data = await response.json();
      this.data = data.data;
      return this.data;
    }
}