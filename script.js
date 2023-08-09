/* 

    instructions and syntaxes

*/

function toggleMode() {
	const html = document.documentElement;
	html.classList.toggle("light");

	// change img tag and switch images
	const img = document.querySelector("#profile img");
	if (html.classList.contains("light")) {
		img.setAttribute(
			"src",
			"https://avatars.githubusercontent.com/u/77335626?v=4"
		);
		img.setAttribute("alt", "Foto de Bernardo Vaz.");
	} else {
		img.setAttribute("src", "./assets/Avatar.png");
		img.setAttribute(
			"alt",
			"Foto de Bernardo em Belo Horizonte, Lagoa da Pampulha."
		);
	}
}
