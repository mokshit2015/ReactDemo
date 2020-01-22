import React from 'react';
import CalcDesign from './CalcDesign';
import './App.css';

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

		CalcKey = event => {
			let a = event.target.value % 10;
			this.setState({
				no1: Number(this.state.no1 +''+ a)
			});
		}
		

	clear = event => this.setState({
		no1: '',
		no2: '',
		op: '',
		ans: 0
	});

	Operation = event =>
		this.setState({
			op: event.target.value,
			no2: this.state.no1,
			no1: ''
		});

	plusminus = event => this.setState({
			no1: -this.state.no1
		});

	Equal = () => {
		const {op, no1, no2, ans} = this.state;
		if (op === '+')
			this.setState({ no1: Number(no2 + no1)});
		else if (op === '-')
			this.setState({ no1: Number(no2 - no1) });
		else if (op === '*') 
			this.setState({ no1: Number(no2 * no1) });
		else if (op === '/')
			this.setState({ no1: Number(no2 / no1) });

		// setTimeout(() => {
		// 	this.setState({ no1: this.state.ans });
		// }, 50);

	}


	render() {
		return (
			<div className="w-25 mx-auto text-center">
				<h3>Calculator</h3>
				<CalcDesign Calc={this.Calc} CalcKey={this.CalcKey} plusminus={this.plusminus} clear={this.clear} Equal={this.Equal} Operation={this.Operation} s={this.state} />
				{/* <h1> Answer : {'' + this.state.no2 + '' + this.state.op + '' + this.state.no1 + '='+ this.state.ans}</h1> */}
			</div>
		);
	}
}

export default Calculation;