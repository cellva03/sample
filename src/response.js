const json = require('./data.json');
// const response={"list":[
//     {
//         "rank":"1",
//         "points":"1025",
//         "name":"John Doe",
//         "age":"27"
//     },
//     {
//         "rank":"3",
//         "points":"245",
//         "name":"Elizabeth",
//         "age":"17"
//     },
//     {
//         "rank":"2",
//         "points":"566",
//         "name":"Samantha",
//         "age":"22"
//     },
//     {
//         "rank":"10",
//         "points":"878",
//         "name":"Katherine",
//         "age":"21"
//     },
//     {
//         "rank":"11",
//         "points":"778",
//         "name":"Danerys",
//         "age":"25"
//     },
//     {
//         "rank":"12",
//         "points":"983",
//         "name":"Eva",
//         "age":"23"
//     },
//     {
//         "rank":"13",
//         "points":"122",
//         "name":"Ruby",
//         "age":"22"
//     },
//     {
//         "rank":"14",
//         "points":"656",
//         "name":"Valentina",
//         "age":"27"
//     },
//     {
//         "rank":"15",
//         "points":"298",
//         "name":"Mila",
//         "age":"32"
//     },
//     {
//         "rank":"4",
//         "points":"497",
//         "name":"Arya",
//         "age":"31"
//     },
//     {
//         "rank":"5",
//         "points":"667",
//         "name":"Jordan",
//         "age":"40"
//     },
//     {
//         "rank":"6",
//         "points":"221",
//         "name":"Christina",
//         "age":"43"
//     },
//     {
//         "rank":"9",
//         "points":"333",
//         "name":"Evangeline",
//         "age":"26"
//     },
//     {
//         "rank":"8",
//         "points":"500",
//         "name":"Jazmine",
//         "age":"35"
//     },
//     {
//         "rank":"7",
//         "points":"765",
//         "name":"Kira",
//         "age":"33"
//     }]}

// function getData() {
//     // var detail;
//     const res = fetch('http://localhost:5000/list')
//                     .then(response => response.json())
//                     // .then(data => {var detail=data})
//     // const data = res.toString()                            
//     console.log(res);

//     // const result = {"list": data};
//     // console.log(result);
//     // return data;
//     };


// const getData =async()=>{
//     // await fetch('http://localhost:5000/list')
//     //             .then(response =>{ 
//     //                 if (!response.ok) {
//     //                     throw new Error("HTTP error " + response.status);
//     //                 }
//     //                 return response.json()
//     //             })
//     //             // .then(data => console.log(data))
//     const res = await fetch('http://localhost:5000/list')
//     const data = await res.json();
//     console.log(data);
//     return data
//     // resp.list = data.list
//     // console.log(resp);
// }
// getData()
// const articles = new Promise((resolve,reject) => {
//     fetch('http://localhost:5000/list', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', },
//     })
//     .then(response => response.json())
//     .then(data => resolve(data))
//     .catch(e=>reject(e))
// })

// const resp = articles.then(data=>data);
const response = json
// console.log(json);

export {response}