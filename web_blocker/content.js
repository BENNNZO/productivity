// const script = document.createElement('script');
// script.setAttribute("type", "module");
// script.setAttribute("src", "./main.js");
// console.log(script)
// const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
// head.insertBefore(script, head.lastChild);

// import { enabled } from "./script"

// import list of blocked websites
const sites = ["youtube.com"]

chrome.storage.local.get(["toggle"]).then((res) => {
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    
    console.log(res)
    console.log(res)
    console.log(res)
    console.log(res)
    console.log(res)
    console.log(res)
    console.log(res)
    console.log(res)
    
    // check on initial load
    sites.map(e => {
        if (window.location.href.includes(e)) window.location.href = "https://www.google.com"
    })
    
    // check again every five seconds unless first check was successfull
    setInterval(() => {
        sites.map(e => {
            if (window.location.href.includes(e)) window.location.href = "https://www.google.com"
        })
    }, 5000)
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        console.log(request)
    })
})