const toggle = document.getElementById("toggle_button")
const knob = document.getElementById("slider_knob")

chrome.storage.local.get(["toggle"]).then((res) => {
    let toggleState = res.toggle
    
    document.body.classList = res.toggle ? "on" : "off"
    knob.classList = res.toggle ? "on" : "off"
    knob.style.left = toggleState ? "25px" : "0px"
    
    toggle.addEventListener("click", async () => {
        toggleState = !toggleState
        
        document.body.classList = toggleState ? "on" : "off"
        knob.classList = toggleState ? "on" : "off"
        knob.style.left = toggleState ? "25px" : "0px"

        chrome.storage.local.set({ toggle: toggleState })
    })
})