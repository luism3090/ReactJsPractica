
// ejemplo de renderear en React sin usar componentes 

const user = 'Luis';

const saludar = <h1>Hola mundo {user}</h1>;

ReactDOM.render(saludar,document.getElementById('app1'));


// Ejemplo de renderear en React usando Componentes y sintaxis de emascript 5

function Saludar(props)
{
	var saludo = <h1>Hola {props.name}</h1>;

	return saludo;
}


ReactDOM.render(
					<div>
						<Saludar name="Daniel"/>
						<Saludar name="Alexis"/>
						<Saludar name="Rafa"/>
						<Saludar name="Jon"/>
						<Saludar name="Fracisco"/>
						<Saludar name="Alvaro"/>
					</div>
					,
					document.getElementById("app2")
				);


// ejemplo de renderear con ReactJs usando componentes y sintaxis de emascript 6

const User = props => 
{
	return 	(
				<div>
					<img src={props.img} alt={props.name} />
					<p>{props.name}</p>
				</div>

			);
};

ReactDOM.render (
					<User img="react_js.png" name="react js" />,
					document.getElementById("app3")
				);