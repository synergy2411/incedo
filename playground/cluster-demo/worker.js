process.on("message", (msg) => {
    console.log("Master says : ", msg)
    process.send(msg);
})