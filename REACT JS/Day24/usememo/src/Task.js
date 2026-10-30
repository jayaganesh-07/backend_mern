const Task = (callback) => {
    setTimeout(() => {
        let data = ["Beast","Leo","Master"]

        callback(data);
    }, 2000)
}

Task((data) => {
    console.log(data);
})