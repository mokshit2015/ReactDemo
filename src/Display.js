import React from 'react';
import './App.css';

function Display(props){
    return(
        <div>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td> First Name : </td>
                    <td> {props.s.fname}</td>
                </tr>
                <tr>
                    <td> Last Name : </td>
                    <td> {props.s.lname}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Display;