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



/*

Con React Js 


*/

// const el2 = React.createElement(
// 									'h1',
// 									{
// 										id:'title'
// 									},
// 									'Hola ',
// 									React.createElement('span',null,'mundo')
// 								);

// ReactDOM.render(el2,document.getElementById('app2'));



/*
 con React y JSX
*/

const el3 = (
				<h1 id="title" className="title" >
					Hola {4+6} 
					<span>
						 mundo
					</span>
				</h1>
			);
ReactDOM.render(el3,document.getElementById('app3'));


