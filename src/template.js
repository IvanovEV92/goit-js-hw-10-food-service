import menuItem from "./menu.json"
import itemTemplate from "../templates/gallery.hbs"
const gallery = document.querySelector(".js-menu")
const markup = itemTemplate(menuItem)
gallery.insertAdjacentHTML("beforeend", markup)
