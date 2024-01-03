var element  = document.querySelector("#anchorTag")
console.log(element.getAttribute("href"))
element.setAttribute("href","contact.html")
console.log(element.getAttribute("href"))

var myButton = document.querySelector("#button")
myButton.addEventListener("click",()=>{
    document.body.style.backgroundColor = "blue"
})

var body1 = document.body

body1.addEventListener("keypress",()=>{
    document.body.style.backgroundColor = "green"
})

var inputArea = document.getElementById("input")

inputArea.addEventListener("keydown",(event)=>{
    console.log(event.key)
    console.log(event.code)
    var isZ = event.code ==="KeyZ"
    var isControl = "ctrlKey"
    if(isControl && isZ){
        event.preventDefault()
        document.querySelector("#topHeading").innerHTML = "UnDo dissabled"
    }
})