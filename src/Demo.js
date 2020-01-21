import React from 'react';
import './App.css';

function Demo(props){
    return(
        <div>
            <label>
                First Name : 
            </label>
            <input type="text" name="fname" onChange={props.setData} />
            <br/>
            <label>
                Last Name :  
            </label>
            <input type="text" name="lname" onChange={props.setData} />
            <br/>
            <input type="button" onClick={props.Done}  value="Submit"/>
        </div>
    );
}

export default Demo;



