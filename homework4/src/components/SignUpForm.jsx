
import React, {useState } from "react";

export const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [showValues, setShowValues] = useState(true)


return (
    <div id='form'>
        <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
        <br/>
        <input  type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
        <br/>
        <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <br/>
        <input type="text" placeholder="Enter your city" value={city} onChange={(e) => {setCity(e.target.value)}}/>
        <br/>
        <input type="text" placeholder="Enter your country" value={country} onChange={(e) => {setCountry(e.target.value)}}/>
        <br/>
        <button onClick={()=>{setShowValues(!showValues)}}>
        {showValues ? 'Hide Table' : 'Show Table' }
        </button>
        {showValues && <table id='table-form' border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                    <td>{country}</td>
                </tr>
            </tbody>

        </table>}
        
    </div>
)
}
