fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        if (!res.ok) throw new Error("Data cannot be fetched")
        return res.json();
    })
    .then((data) => {
        const firstFive = data.slice(0, 5);
        firstFive.forEach(post => console.log(post.title));
    })
    .catch(err => console.log("Fetch failed:", err))
