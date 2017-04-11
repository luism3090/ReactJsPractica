const contenedor1 = document.getElementById('app1');

const ImgAvatar = props =>
{
	var template = <img src={props.url} alt={props.name} />
	return template;
}

const TitleAvatar = props =>
{
	var template = 	(	<p>
							{props.name}
						</p> 
					);

	return template; 
}



const getAvatar = props =>
{

	

	var template =  (

						<div>
							<ImgAvatar user={props.algo}/>
							<TitleAvatar user={prop.algo} />
						</div>

					) 
}


const datosUser = 
{
	url:"https://www.shareicon.net/data/128x128/2016/07/10/119874_apps_512x512.png",
	name:"React js"
}


ReacDOM.render(<getAvatar algo={datosUser} />,contenedor1)










