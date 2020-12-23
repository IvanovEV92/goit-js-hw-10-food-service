const switchInput = document.querySelector(".theme-switch__toggle")
const bodyTheme = document.querySelector("body")

const savedTheme = localStorage.getItem("theme")
if (savedTheme) {
	bodyTheme.classList.add("dark-theme")
	switchInput.checked = true
}

switchInput.addEventListener("change", () => {
	if (switchInput.checked) {
		bodyTheme.classList.add("dark-theme")
		bodyTheme.classList.remove("light-theme")
		localStorage.setItem("theme", "dark-theme")
	} else {
		bodyTheme.classList.add("light-theme")
		bodyTheme.classList.remove("dark-theme")
		localStorage.clear()
	}
})
