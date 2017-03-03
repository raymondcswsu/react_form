import React from 'react';
import Form from './form'; 
import Tile from './Tile'; 

class FormParent extends React.Component{
	constructor(props){
	  super(props); 
	  this.action = this.action.bind(this); 
	  const defaultState = { people: [] }; 
	  this.state = JSON.parse(localStorage.getItem('peopleData')) || defaultState; 
	}
	
	action({value}){
		this.setState(state => ({
			people: [{name: document.getElementById("name").value, phoneNumber: document.getElementById("phoneNumber").value, 
			email: document.getElementById("email").value}, ...state.people]
		}));
	}
	
	render()
	{
		return(
			<div>
				<Form submitAction={this.action} /> 
			
			{this.state.people.map((person) => (
					<Tile
						name={person.name}
						phoneNumber={person.phoneNumber}
						email={person.email}
					/>
				))}
			</div> 
		)
	}
};

export default FormParent; 