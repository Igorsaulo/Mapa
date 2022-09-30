const url = ('http://localhost:3000/local/632f3f38b40aabe42f746e35')

async function get(){
    const response= await fetch(url);
    console.log(response.json);
}
get()