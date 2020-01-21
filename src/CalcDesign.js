import React from 'react';
import './App.css';

function CalcDesign(props) {
	const { Calc,Equal,Operation } = props;
	return (
		<div>
			<input type="text" name="no1" value={props.s.no1} onChange={props.Calc} />
			<br />
			<input type="button" value="1" onClick={Calc} />
			<input type="button" value="2" onClick={Calc} />
			<input type="button" value="3" onClick={Calc} />
			<br />
			<input type="button" value="4" onClick={Calc} />
			<input type="button" value="5" onClick={Calc} />
			<input type="button" value="6" onClick={Calc} />
			<br />
			<input type="button" value="7" onClick={Calc} />
			<input type="button" value="8" onClick={Calc} />
			<input type="button" value="9" onClick={Calc} />
			<br />
			<input type="button" value="0" onClick={Calc} />
			<input type="button" value="=" onClick={Equal} />
			<input type="button" value="+" onClick={Operation} />
		</div>
	);
}

export default CalcDesign;
