'use strict';

/*
Vanilla JS

*/

// const el1 = document.createElement('h1');
// const child = document.createElement('span');
// el1.setAttribute('id','title');
// el1.textContent = "Hola ";
// child.textContent = "mundo"
// el1.appendChild(child)
// document.getElementById('app1').appendChild(el1);


// Con React Js 


// const el2 = React.createElement(
// 									'h1',
// 									{
// 										id:'title'
// 									},
// 									'Hola ',
// 									React.createElement('span',null,'mundo')
// 								);

// ReactDOM.render(el2,document.getElementById('app2'));


// con React y JSX


// const el3= (
// 				<h1 id="title" className="title" >
// 					Hola {4+6} 
// 					<span>
// 						 mundo
// 					</span>
// 				</h1>
// 			);
// ReactDOM.render(el3,document.getElementById('app3'));


var el4 = React.createElement(
	'table',
	{ className: 'tblUsers' },
	React.createElement(
		'thead',
		null,
		React.createElement(
			'tr',
			null,
			React.createElement(
				'th',
				null,
				'Nombre'
			),
			React.createElement(
				'th',
				null,
				'Edad'
			)
		)
	),
	React.createElement(
		'tbody',
		null,
		React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				'Luis'
			),
			React.createElement(
				'td',
				null,
				'20'
			)
		),
		React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				'Ana'
			),
			React.createElement(
				'td',
				null,
				'30'
			)
		)
	)
);

ReactDOM.render(el4, document.getElementById('app4'));

var app = document.getElementById('app5');

function reloj() {
	// app.textContent = new Date().toLocaleTimeString();


	var now = new Date().toLocaleTimeString();

	var el5 = React.createElement(
		'span',
		null,
		now
	);

	ReactDOM.render(el5, app);
}

setInterval(reloj, 1000);