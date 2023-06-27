const toggle = document.getElementById("toggle_button")
const text = document.getElementById("text")

chrome.storage.local.get(["toggle"]).then((res) => {
    let toggleState = res.toggle
    
    text.innerText = toggleState
    
    toggle.addEventListener("click", async () => {
        toggleState = !toggleState
        text.innerText = toggleState
        chrome.storage.local.set({ toggle: toggleState })
    })
})