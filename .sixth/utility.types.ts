 interface User {
    id : number ,
    name : string ,
    email : string ,
    password : string 
 }
 let user :  Partial<User> = { name : 'john'}   // update the only side of field that u want to update
 let user1 : Pick<User, 'name' | 'email'> = { name : 'john', email : 'john@example.com' } // pick only the fields that u want to   use
 let user2 : Omit<User, "id"> = { name : 'john', email : 'john@gmail.com', password : 'password123' } // omit the id field




 interface Students {
    name : string ,
    class : number,
    grade : number,
    points : number
 }

 let student : Students = {
    name : 'john' ,
    class : 2 ,
    grade : 4,
    points : 80
 } 

 function getstudent() : Partial<Students>  {
    return  {
    name : 'john',
    grade : 4
    
 }
   
 function getstudents() : Pick<Students , 'name' | 'class' > {
    return {
        name : 'john',
        class : 2

    }
 }
 function getstudents2() : Omit<Students, 'points' >  {
    return {
        name : 'john' ,
        class : 2,
        grade : 4
    }

 }