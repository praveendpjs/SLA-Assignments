function fetchData(){
    setTimeout(()=>{
        console.log("This is the data");
        
    },3000)
}

async function simulateDataFetching(){
    const dataFetch = await fetchData() 
}

simulateDataFetching()