"use strict";

var elemento1 = document.getElementById("app1");

function User1(props) {
	var datos = React.createElement("img", { src: props.url, alt: props.name });
	return datos;
}

ReactDOM.render(React.createElement(User1, { url: "react_js.png", name: "ReactJs" }), elemento1);

var elemento2 = document.getElementById("app2");

var User2 = function User2(props) {
	var template = React.createElement(
		"div",
		null,
		React.createElement("img", { src: props.url, alt: props.name }),
		React.createElement(
			"p",
			null,
			props.name
		)
	);

	return template;
};

ReactDOM.render(React.createElement(User2, { url: "react_js.png", name: "ReactJs" }), elemento2);