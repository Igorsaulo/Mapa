async function Read (){
    const response =await fetch ("http://localhost:3000/local")
    const getjson = await response.json()
    console.log(getjson)
  }
module.exports= Read;