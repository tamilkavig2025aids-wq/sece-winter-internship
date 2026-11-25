const foodOrder = new Promise((resolve,reject)=>{
    let foodReady=false;
    if(foodReady){
        resolve("Food is ready");
    }
    else{
       reject("food not ready")
    }
})
foodOrder
     .then((result)=>console.log(result))
     .catch((error)=>console.log(error))

     //async function
async function getUsers(){
    console.log("fetching users");
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    console.log(data);
}
getUsers();
//async arrow function
const getUsers1=async()=>{
    console.log("fetching users");
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    console.log(data);
    const email=data.map((user)=>user.email);
    console.log(email);

}
getUsers1();
