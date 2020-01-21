import React from 'react';
import CalcDesign from './CalcDesign';

class Calculation extends React.Component {
	state = {
		no1: '',
		no2: 0,
		op: '',
		ans: 0
	}

	Calc = event => 
		this.setState({
			no1: Number(this.state.no1 + event.target.value)
		});
	

	Operation = event => 
		this.setState({
			op: event.target.value,
			no2: this.state.no1,
			no1: ''
		});
	
	Equal = () => {
		if(this.state.op==='+'){
			this.setState({ans: Number(this.state.no2 + this.state.no1)});
		}
	}


	render() {
		return (
			<div>
				<CalcDesign Calc={this.Calc} Equal={this.Equal} Operation={this.Operation} s={this.state} />
				<h1> Answer : {'' + this.state.no2 + '' + this.state.op + '' + this.state.no1 + '='+ this.state.ans}</h1>
			</div>
		);
	}
}

export default Calculation;