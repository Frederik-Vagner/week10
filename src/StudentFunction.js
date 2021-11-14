import React, {useState} from 'react'

export default function StudentFunction() {
    //const [fnm, setFnm] = useState('No First Name')
    //const [lnm, setLnm] = useState('No Last Name')
    const [data, setData] = useState({email:'No Email', name:'No Name', adress:'No Adress', adress2:'No Adress2', city:'No City', province:'No Province', postalCode:'No Postal Code'})

    const readData = (event) =>{
        setData({...data, [event.target.name]: event.target.value})
    }

    const submitData = (event) => {
        event.preventDefault()
        alert(JSON.stringify(data))
    }

    return (
        <div>
            
            <form onSubmit={submitData}>
                <input name="email" onChange={readData} placeholder="Enter Email" type="text" />
                <br/>
                <input name="name" onChange={readData} placeholder="Enter Name" type="text" />
                <br/>
                <input name="adress" onChange={readData} placeholder="Enter Adress" type="text" />
                <br/>
                <input name="adress2" onChange={readData} placeholder="Enter Adress2" type="text" />
                <br/>
                <input name="city" onChange={readData} placeholder="Enter City" type="text" />
                <br/>
                <input name="province" onChange={readData} placeholder="Enter Province" type="text" />
                <br/>
                <input name="postalCode" onChange={readData} placeholder="Enter Postal Code" type="text" />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <h4>Email: {data.email}</h4>
            <h4>Name: {data.name}</h4>
            <h4>Adress: {data.adress}</h4>
            <h4>City: {data.city}</h4>
            <h4>Province: {data.province}</h4>
            <h4>Postal Code: {data.postalCode}</h4>
        </div>
    )
}
