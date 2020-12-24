const Theme = {
	LIGHT: "light-theme",
	DARK: "dark-theme",
}
const switchInput = document.querySelector(".theme-switch__toggle")
const bodyTheme = document.querySelector("body")

const savedTheme = localStorage.getItem("theme")
if (savedTheme) {
	bodyTheme.classList.add(Theme.DARK)
	switchInput.checked = true
}

switchInput.addEventListener("change", () => {
	if (switchInput.checked) {
		bodyTheme.classList.add(Theme.DARK)
		bodyTheme.classList.remove(Theme.LIGHT)
		localStorage.setItem("theme", Theme.DARK)
	} else {
		bodyTheme.classList.add(Theme.LIGHT)
		bodyTheme.classList.remove(Theme.DARK)
		localStorage.clear()
	}
})
