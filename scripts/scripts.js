/*
    ====================== Listeners
*/

/* Will allow to know if the user clicked a content or not
therefore, closing all the popups or not*/
let hasClickedClickableContent = false

//Burger listener
let burger = document.getElementById("burger")
let mainMenu = document.getElementById("mainMenu")
burger.addEventListener("click", () => {
    hasClickedClickableContent = true
    if (mainMenu.style.display !== "flex") {
        mainMenu.style.display = "flex"
    }
    else {
        closeMenu()
    }
})

//DropDowwn menu listeners
let dropDownMenu = document.getElementsByClassName("dropDownMenu")

for (let d of dropDownMenu) {
    d.addEventListener("click", (event) => {
        hasClickedClickableContent = true

        //Checking if the menu is open, if not opens it, close it otherwise
        if (event.target.children[1].style.display !== "flex") {
            closeAllDropDownMenus()
            event.target.children[1].style.display = "flex"
            event.target.children[0].children[1].className = "fa-solid fa-chevron-up"
        }
        else {
            event.target.children[1].style.display = ""
            event.target.children[0].children[1].className = "fa-solid fa-chevron-down"


        }


    })
}



//Body listeners : This listener will always be triggered after all the other listeners
let body = document.getElementsByTagName("body")[0]

body.addEventListener("click", () => {
    closeAllPopUps()
})


//Tooltip listeners
let contentTooglingTooltips = document.getElementsByClassName("clickToToogleTooltip")


console.log(contentTooglingTooltips)

for (let c of contentTooglingTooltips) {
    c.addEventListener("click", (event) => {
        hasClickedClickableContent = true
        let linkedToogleBox = document.getElementById(event.target.parentNode.attributes[0].nodeValue)
        if (linkedToogleBox.style.display !== "flex") {
            closeAllTooltips()
            linkedToogleBox.style.display = "flex"
        }
        else {
            linkedToogleBox.style.display = "none"
        }
    })
}




// ========== Functions ==============
/*
    Function that will close all the popups
*/
function closeAllPopUps() {
    if (hasClickedClickableContent) {
    }
    else {
        closeMenu()
        closeAllDropDownMenus()
        closeAllTooltips()

    }
    hasClickedClickableContent = false

}
//Closes the main menu
function closeMenu() {
    //We check if we are in mobile version before closing the menu. Could be useful
    if (window.innerWidth < 1200) {
        mainMenu.style.display = "none"
    }

}

//Closes all the dropdown menus
function closeAllDropDownMenus() {
    //We check if we are in mobile version to avoid not displaying the menus in desktop mode
    if (window.innerWidth < 1200) {
        for (let d of dropDownMenu) {
            d.children[1].style.display = "none"
            d.children[0].children[1].className = "fa-solid fa-chevron-down"
        }
    }

}

function closeAllTooltips() {
    let tooltips = document.querySelectorAll('[role="tooltip"]')
    tooltips.forEach((t) => {
        t.style.display = "none"
    })
}