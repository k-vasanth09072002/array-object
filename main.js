let member=[
    {
        name:"car",
        modal:2022,
        insrence:2050
    },
    {
        name:"vasanth",
        age:21,
        deparment:"b.com"
    },
    {
        name:"pandi",
        age:21,
        deparment:"BCA"
    
    },
    {
        name:"mani",
        age:23,
        deparment:"BE"
    }
]
 


 let out=member.map(collect);

 function collect(person){

    return (person.name);
    
 }
 
 console.log(out);
 



// let msg=`hi + ${this.name} + your age + ${this.age}`;
// console.log(msg);
 


  

