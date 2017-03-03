import React from 'react'; 

export default ({ name="none", phoneNumber="none", email="none"}) => 
(
	<div className="tile">
		<h1>{name}</h1>
		<h2>{phoneNumber}</h2>
		<h3>{email}</h3>
	</div>
);