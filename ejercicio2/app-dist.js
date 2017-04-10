'use strict';

// ejemplo de renderear en React sin usar componentes 

var user = 'Luis';

var saludar = React.createElement(
	'h1',
	null,
	'Hola mundo ',
	user
);

ReactDOM.render(saludar, document.getElementById('app1'));

// Ejemplo de renderear en React usando Componentes y sintaxis de emascript 5

function Saludar(props) {
	var saludo = React.createElement(
		'h1',
		null,
		'Hola ',
		props.name
	);

	return saludo;
}

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(Saludar, { name: 'Daniel' }),
	React.createElement(Saludar, { name: 'Alexis' }),
	React.createElement(Saludar, { name: 'Rafa' }),
	React.createElement(Saludar, { name: 'Jon' }),
	React.createElement(Saludar, { name: 'Fracisco' }),
	React.createElement(Saludar, { name: 'Alvaro' })
), document.getElementById("app2"));

// ejemplo de renderear con ReactJs usando componentes y sintaxis de emascript 6

var User = function User(props) {
	return React.createElement(
		'div',
		null,
		React.createElement('img', { src: props.img, alt: props.name }),
		React.createElement(
			'p',
			null,
			props.name
		)
	);
};

ReactDOM.render(React.createElement(User, { img: 'react_js.png', name: 'react js' }), document.getElementById("app3"));