/* 
    instructions and syntaxes
*/

const iconsList = [
	"📷",
	"📄",
	"🐱‍💻",
	"🐱‍👤",
	"🐱‍🚀",
	"🐱‍👓",
	"🐱‍🐉",
	"🔋",
	"🔗",
	"🔧",
	"🔨",
	"🎉",
	"🎲",
	"🚀",
	"👨‍🚀",
	"🧱",
	"🔬",
	"🧰",
	"🎬",
	"📺",
	"📚",
	"📁",
	"💡",
	"🧪",
	"⚡",
	"🎯",
	"♟️",
	"🎨",
];

function randomIntNumber(range = 2) {
	return Math.floor(Math.random() * range);
}

function setFavicon(icon = "📄") {
	const favicon = document.querySelector("link[rel~='icon']");

	favicon.href =
		"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 110 100%22><text y=%22.9em%22 font-size=%2290%22>" +
		icon +
		"</text></svg>";
}

function setRandomIcon() {
	setFavicon(iconsList[randomIntNumber(iconsList.length)]);
}

function setFaviconDevice() {
	const iconsDevice = { desktop: "🖥️", laptop: "💻", mobile: "📱" };

	if (window.innerWidth <= 800) {
		setFavicon(iconsDevice.mobile);
	} else if (window.innerWidth <= 1400) {
		setFavicon(iconsDevice.laptop);
	} else {
		setFavicon(iconsDevice.desktop);
	}
}

setFavicon("⚙️");
setTimeout(() => {
	setRandomIcon();
}, 400);
setTimeout(() => {
	setRandomIcon();
}, 800);
setTimeout(() => {
	setRandomIcon();
}, 1500);
setTimeout(() => {
	setFaviconDevice();
}, 3000);

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
