"use strict";

// rendereando con REACT JS usando la sintaxis de Emascript 5

var elemento1 = document.getElementById('app1');

function User1(props) {
	var avatar = React.createElement(
		"div",
		null,
		React.createElement("img", { src: props.url, alt: props.name }),
		React.createElement(
			"p",
			null,
			props.name
		)
	);

	return avatar;
}

ReactDOM.render(React.createElement(User1, { url: "react_js.png", name: "ReactJS" }), elemento1);

/* 

rendereando con REACT JS usando la sintaxis de Emascript 6 y reutilizando componentes


*/

var elemento2 = document.getElementById("app2");

var Avatar = function Avatar(props) {
	var templAvatar = React.createElement("img", { src: props.user.url, alt: props.user.name });

	return templAvatar;
};

var UserName = function UserName(props) {
	var templNombre = React.createElement(
		"p",
		null,
		props.user.name
	);

	return templNombre;
};

var User2 = function User2(props) {
	var temp = React.createElement(
		"div",
		{ className: "user-item" },
		React.createElement(Avatar, { user: props.user }),
		React.createElement(UserName, { user: props.user })
	);

	return temp;
};

var user = {
	name: "ReactJS",
	url: "react_js.png"
};

ReactDOM.render(React.createElement(User2, { user: user }), elemento2);