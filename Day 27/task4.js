fetch("https://api.github.com/users/pravendpjs")
    .then(res => {
        if (!res.ok) throw new Error("Data cannot be fetched")
        return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log("Fetch failed:", err))
