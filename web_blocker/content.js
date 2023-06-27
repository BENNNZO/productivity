// list of blocked websites
const blocked = [
    "youtube.com",
    "facebook.com"
]

// check on initial load
blocked.map(e => {
    if (window.location.href.includes(e)) window.location.href = "https://www.google.com"
})

// check again every five seconds unless first check was successfull
setInterval(() => {
    blocked.map(e => {
        if (window.location.href.includes(e)) window.location.href = "https://www.google.com"
    })
}, 5000)