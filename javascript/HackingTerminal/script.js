const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}
function main() {

    setInterval(() => {
        let last = document.body.getElementsByTagName("div");

        last = last[last.length - 1];

        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }

        else {

            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    let text = [
        "Initialized Hacking",
        "Reading Your Files",
        "Password Files Detected",
        "Sending All Password and Personal Files to the Server",
        "Cleaning Up",
        "Shit Your PC Got Hacked :( "
    ]

    for (const item of text) {
        addItem(item)
    }
}
main()

