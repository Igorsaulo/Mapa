async function Delet(item){
    const init ={
      method:'DELETE',
    }
    const response = await fetch("http://localhost:3000/local/"+item,init)
    const jsonpost = await response.json()
  }
module.exports= Delet;