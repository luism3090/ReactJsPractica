 const elemento1 = document.getElementById("app1");

function User1(props)
{
	var datos = <img src={props.url} alt={props.name} />
	return datos;
}


ReactDOM.render(
				<User1 url="react_js.png" name="ReactJs" />,
				elemento1
				);




var elemento2 =  document.getElementById("app2");


const User2 = props => 
{
	var template = 	(
						<div> 
							<img src={props.url} alt={props.name} />
							<p>{props.name}</p>
						</div>
					);

	return template;

}


ReactDOM.render(<User2 url="react_js.png" name="ReactJs"/>,elemento2)