// in ts 
interface Product {  // this serves as blueprint that pre states the shapes in which data will take 
   id: number ,
   name : string ,
   price : number ,
   available :  boolean
  }

  let product : Product = {    //
   id : 1,
   name : "laptop" ,
   price : 99.98 ,
   available : true 
  }
  console.log( product.name)
  console.log(product.price)
  console.log(product.id)
  
  interface  Agent  { // pre defined blue print 
   id : number 
   name : string 
   model : string 
   isActive : boolean 
  }  
  let agent :  Agent = {
   id : 1,
   name : "claude",
   model : "sonnet-4-6",
   isActive : true 
  }
  console.log(agent.isActive)
  console.log(agent.model)
  console.log(agent.name)
  // union 
   interface Payment {
      id : number ,
      amount : number ,
      status : "paid"| "pending" | "failed"
      receipt : string | null 
   } 
 
   let payment :  Payment= {
      id : 1,
      amount : 234 ,
      status : "pending" ,
      receipt : null
   }
   console.log(payment.amount)
   console.log(payment.id)
   console.log(payment.receipt)
   console.log(payment.status) 

   // generics 
   // without 
   function greet( name : string ): string {
      return name 

   }
   greet("john")  
   function add(a : number , b : number)  {
      return a +b 
   } 
   add(5, 10)
   
