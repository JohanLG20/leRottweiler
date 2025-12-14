let previews = document.getElementsByClassName("preview")

for (let prev of previews) {
    prev.addEventListener("mouseover", (event) => {
        event.target.style.cursor = "pointer"
    })

    prev.addEventListener("click", (event) => {

        if (event.target.parentNode.children[1].style.display !== "flex") {
           setTimeout(()=>
                {event.target.parentNode.children[1].style.display = "flex"},75)
            // Rotating the arrow
            event.target.children[3].children[0].animate([
                {
                    transform: "rotate(0)"
                },
                {
                    transform: "rotate(-180deg)"
                }
            ],
                { duration: 225, fill: "forwards" })

        }
        else {
            setTimeout(()=>
                {event.target.parentNode.children[1].style.display = "none"},112)
            // Rotating the arrow
            event.target.children[3].children[0].animate([
                {
                    transform: "rotate(-180deg)"
                },
                {
                    transform: "rotate(0)"
                }
            ],
                { duration: 225, fill: "forwards" })

           

            

        }
    })
}