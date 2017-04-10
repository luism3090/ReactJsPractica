
// rendereando con REACT JS usando la sintaxis de Emascript 5

const elemento1 = document.getElementById('app1');

function User1(props)
{
	var avatar = 	(
						<div>
							<img src={props.url} alt={props.name} />
							<p>{props.name}</p>
						</div>
					);

	return avatar;
}

ReactDOM.render(<User1 url="react_js.png" name="ReactJS" />,elemento1);




/* 

rendereando con REACT JS usando la sintaxis de Emascript 6 y reutilizando componentes


*/

const elemento2 = document.getElementById("app2");



const Avatar = props =>
{
	var templAvatar = <img src={props.user.url} alt={props.user.name} />;

	return templAvatar;
};


const UserName = props => 
{
	var templNombre = <p>{props.user.name}</p>;

	return templNombre;
}


const User2 = props =>
{
	var temp = 	(
					<div className="user-item">
						<Avatar user={props.user} />
						<UserName user={props.user}/>
					</div>
				);

	return temp;
}


const user = 
{
	name:"ReactJS",
	url:"react_js.png"
}

ReactDOM.render(<User2 user={user}/>,elemento2);


