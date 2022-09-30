async function Update(pos,item){
    const init = {
      method: 'PATCH',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(pos),
      }
      const response = await fetch("http://localhost:3000/local/"+item,init)
      const jsonpost = await response.json()
      console.log(jsonpost)
    }
module.exports = Update;