"use strict";

var elemento1 = document.getElementById('app1');

var ImgAvatar = function ImgAvatar(props) {
	var tmpAvatar = React.createElement("img", { src: props.user.url, alt: props.user.name });

	return tmpAvatar;
};

var NameAvatar = function NameAvatar(props) {
	var tmpNameAvatar = React.createElement(
		"p",
		null,
		props.user.name
	);

	return tmpNameAvatar;
};

var User = function User(props) {
	var tmpUser = React.createElement(
		"div",
		null,
		React.createElement(ImgAvatar, { user: props.user }),
		React.createElement(NameAvatar, { user: props.user })
	);

	return tmpUser;
};

var array = [{
	url: "https://www.shareicon.net/data/128x128/2016/07/10/119874_apps_512x512.png",
	name: "React js"
}, {
	url: "https://dynamicimagesmx-v2b.netdna-ssl.com/product_class_external_product/angular_js_2_128_n.png",
	name: "Angular js"
}, {
	url: "https://flowdocs.built.io/assets/bltd564beafbccd1e5b/Node.js-Code.png",
	name: "Node js"
}, {
	url: "http://javascript-html5-tutorial.com/wp-content/uploads/2014/11/backbone.png",
	name: "Backbone js"
}, {
	url: "https://lh4.googleusercontent.com/cYMXkUnvqYWzftQb9DsX86lIZ4PZ02SkWZL_NvyPhjFFJjNvtWeXzhfHcyuuHIOu44pd9mEr=s128-h128-e365",
	name: "Vue js"
}];

var UsersList = function UsersList(props) {
	var listaUser = props.list.map(function (user, i) {
		return React.createElement(User, { user: user, key: i });
	});

	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			{ className: "user-list" },
			listaUser
		)
	);
};

ReactDOM.render(React.createElement(UsersList, { list: array })
//<User user={array[0]}/>

, elemento1);