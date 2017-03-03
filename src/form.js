import React from 'react'; 
import validator from 'validator'; 

class Form extends React.Component{
	constructor(props)
	{
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange1 = this.onChange1.bind(this);
		this.onChange2 = this.onChange2.bind(this);
		this.onChange3 = this.onChange3.bind(this);
		 
		this.state = {
			value1: '',
			value2: '',
			value3: '' 
		};
	}
	
	onChange1(event){
		this.setState({
			value1: event.target.value1
		});
	}
	
	onChange2(event){
		this.setState({
			value2: event.target.value2
		});
	}
	
	onChange3(event){
		this.setState({
			value3: event.target.value3
		});
	}
	
	
	
	onSubmit(){
		
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		
		if( validator.isEmail(document.getElementById("email").value + '') 
		&& document.getElementById("phoneNumber").value.match(phoneno)
		)
		{
			this.props.submitAction(this.state);
			this.setState({value:''});
		}
		
	}

	render(){ return(
		<div>
			Name: <  input type="text" id="name" onChange={this.onChange1} value={this.state.value} />
			Phone Number: < input type="text" id="phoneNumber" onChange={this.onChange2} value={this.state.value} />
			Email: < input type="text" id="email" onChange={this.onChange3} value={this.state.value} />
			<button onClick={this.onSubmit}>Submit</button> 
		</div>
	)
	}
}

export default Form; 