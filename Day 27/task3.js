async function fetchData() {
    try {
        fetch("https://api.github.com/users/praveendpjs")
        .then((res)=>{
            if(!res.ok) throw new Error("Data is not fetched")
                return res.json()
        })
        .then(data => console.log(data))
    }catch(error){
        console.log(error.message);
        
    }
}
fetchData()