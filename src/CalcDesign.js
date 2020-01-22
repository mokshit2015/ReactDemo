import React from 'react';
import './App.css';

function CalcDesign(props) {
	const { Calc,Equal,Operation,clear,plusminus } = props;
	return (
		<div className="cal">
			<div className="row">
			<input type="text" name="no1" className="form-control col" value={props.s.no1}  onChange={props.CalcKey} />
			</div>
			<div className="row">
			<input type="button" className="col btn" value="1" onClick={Calc} />
			<input type="button" className="col btn " value="2" onClick={Calc} />
			<input type="button" className="col btn " value="3" onClick={Calc} />
			<input type="button" className="col btn " value="4" onClick={Calc} />
			</div>
			<div className="row">
			<input type="button" className="col btn " value="5" onClick={Calc} />
			<input type="button" className="col btn " value="6" onClick={Calc} />
			<input type="button" className="col btn " value="7" onClick={Calc} />
			<input type="button" className="col btn " value="8" onClick={Calc} />
			</div>
			<div className="row">
			<input type="button" className="col btn " value="9" onClick={Calc} />
			<input type="button" className="col btn " value="0" onClick={Calc} />
			<input type="button" className="col btn " value="+/-" onClick={plusminus} />
			<input type="button" className="col btn " value="C" onClick={clear} />
			</div>
			<div className="row">
			<input type="button" className="col btn " value="+" onClick={Operation} />
			<input type="button" className="col btn " value="-" onClick={Operation} />
			<input type="button" className="col btn " value="*" onClick={Operation} />
			<input type="button" className="col btn " value="/" onClick={Operation} />
			</div>
			<div className="row">
				<button className="col-md-12 btn btn-primary" value="=" onClick={Equal}>=</button>
			</div>
		</div>
	);
}

export default CalcDesign;
