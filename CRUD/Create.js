async function Create(pos){
    const init = {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(pos),
      }
      const response = await fetch("http://localhost:3000/local",init)
      const jsonpost = await response.json()
      console.log(jsonpost)
    }
module.exports= Create;