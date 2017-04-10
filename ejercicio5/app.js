const elemento1 = document.getElementById('app1');

const ImgAvatar = props =>
{
	var tmpAvatar = (
						<img src={props.user.url} alt={props.user.name} />
					);

	return tmpAvatar;
}

const NameAvatar = props =>
{
	var tmpNameAvatar = (
							<p>{props.user.name}</p>
						);

	return tmpNameAvatar;
}


const User = props => 
{
	var tmpUser = 	(
						<div>
							<ImgAvatar user={props.user}/>
							<NameAvatar user={props.user}/>
						</div>
					);

	return tmpUser;
}

const array = 
[
	{
		url:"https://www.shareicon.net/data/128x128/2016/07/10/119874_apps_512x512.png",
		name:"React js"
	},
	{
		url:"https://dynamicimagesmx-v2b.netdna-ssl.com/product_class_external_product/angular_js_2_128_n.png",
		name:"Angular js"
	},
	{
		url:"https://flowdocs.built.io/assets/bltd564beafbccd1e5b/Node.js-Code.png",
		name:"Node js"
	},
	{
		url:"http://javascript-html5-tutorial.com/wp-content/uploads/2014/11/backbone.png",
		name:"Backbone js"
	},
	{
		url:"https://lh4.googleusercontent.com/cYMXkUnvqYWzftQb9DsX86lIZ4PZ02SkWZL_NvyPhjFFJjNvtWeXzhfHcyuuHIOu44pd9mEr=s128-h128-e365",
		name:"Vue js"
	}
];


const UsersList = props => 
{
	const listaUser = props.list.map((user,i) => <User user={user} key={i} /> );

	return (
				<div>
					<div className="user-list">
						{listaUser}
					</div>
				</div>
				

			); 
}

ReactDOM.render	(
					<UsersList list={array} />
					//<User user={array[0]}/>
					,
					elemento1
				);