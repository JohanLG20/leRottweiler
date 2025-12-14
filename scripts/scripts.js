let burger = document.getElementById("burger")
let mainMenu = document.getElementById("mainMenu")
let dropDownMenu = document.getElementsByClassName("dropDownMenu")
burger.addEventListener("click", () => {
    if (mainMenu.style.display !== "flex") {
        mainMenu.style.display = "flex"
    }
    else {
        mainMenu.style.display = "none"
    }
})

for (let d of dropDownMenu) {
    d.addEventListener("click", (event) => {

        //Checking if the menu is open, if not opens it, close it otherwise
        if (event.target.children[1].style.display !== "flex") {
            event.target.children[1].style.display = "flex"
            event.target.children[0].children[1].className = "fa-solid fa-chevron-up"
            console.log(event.target.children[0].children[1])

            //Checking if an other menu is open and closing it if it's the case
            for (let d of dropDownMenu) {
                if (d.children[1].style.display === "flex") {
                    if (event.target.children !== d.children) {
                        d.children[1].style.display = ""
                        console.log(d)
                        console.log(d.parentNode)
                        d.children[0].children[1].className = "fa-solid fa-chevron-down"

                    }
                }


            }
        }
        else {
            event.target.children[1].style.display = ""
            event.target.children[0].children[1].className = "fa-solid fa-chevron-down"


        }


    })
}
