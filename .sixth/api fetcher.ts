// define what data looks like 
interface user {
    id : number ;
    name : string ;
    email : string ;
} 
async function fetchUser(id : number):   Promise<user> {
    const response = await fetch ( 'https: //jsonplaceholder.typecode.com/user/${id} ');

    if (!response.ok) {
        throw  new Error ( ' Http error ! status : ${response.status') } 
    }
    const data : user = await response.json();
    return data ; 
} 
//  method 
fetchUser(1).then (user => {
    console.log(user.name);
    console.log(user.email);
})