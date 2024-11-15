let data ={

    name:'Deepak',
    age:21,
    college:'IIITH',
    role:"Data scientist",
    company:"Gramener"
}

const a = document.querySelector('a');
function createAndDownload(){

    let fileData = JSON.stringify(data);
    // console.log(fileData);

    let file = new Blob([fileData],{type:'json'});
    let url = URL.createObjectURL(file);// it creates a url
    // console.log(url);
    a.href = url;
}

// function Temp(){
//     // creates an empty object inside the dunction (when we use new operatoer in front of function)
//     // if a function starts with capital letter it is a constructor one
//     // empty {} => #400
//     // this refers to the address => 400

//     console.log('object');
// }

// let x = new Temp();
// console.log(x);