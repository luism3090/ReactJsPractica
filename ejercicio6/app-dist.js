"use strict";

var contenedor1 = document.getElementById('app1');

var ImgAvatar = function ImgAvatar(props) {
	var template = React.createElement("img", { src: props.url, alt: props.name });
	return template;
};

var TitleAvatar = function TitleAvatar(props) {
	var template = React.createElement(
		"p",
		null,
		props.name
	);

	return template;
};

var getAvatar = function getAvatar(props) {

	var template = React.createElement(
		"div",
		null,
		React.createElement(ImgAvatar, { user: props.algo }),
		React.createElement(TitleAvatar, { user: prop.algo })
	);
};

var datosUser = {
	url: "https://www.shareicon.net/data/128x128/2016/07/10/119874_apps_512x512.png",
	name: "React js"
};

ReacDOM.render(React.createElement("getAvatar", { algo: datosUser }), contenedor1);