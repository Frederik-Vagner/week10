import React, {useState} from 'react'

export default function StudentFunction1() {
    //const [fnm, setFnm] = useState('No First Name')
    //const [lnm, setLnm] = useState('No Last Name')
    const [data, setData] = useState({email:'', name:'', adress:'', adress2:'', city:'', province:'', postalCode:''})

    const readData = (event) =>{
        setData({...data, [event.target.name]: event.target.value})
    }

    const submitData = (event) => {
        event.preventDefault()
        alert(JSON.stringify(data))
    }
    return (
        <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

            <form onSubmit={submitData}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input name="email" onChange={readData} placeholder="Email" type="text" class="form-control" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Name</label>
      <input name="name" onChange={readData} placeholder="Full Name" type="text" class="form-control" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input name="adress" onChange={readData} placeholder="1234 Main St" type="text" class="form-control"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input name="adress2" onChange={readData} placeholder="Apartment, studio, or floor" type="text" class="form-control" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input name="city" onChange={readData} placeholder="Enter City" type="text" class="form-control" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Province</label>
      <select name="province" onChange={readData} id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option value="Alberta">Alberta</option>
        <option value="British Columbia">British Columbia</option>
        <option value="Manitoba">Manitoba</option>
        <option value="New Brunswick">New Brunswick</option>
        <option value="Newfoundland and labrador">Newfoundland and labrador</option>
        <option value="Nova Scotia">Nova Scotia</option>
        <option value="Ontario">Ontario</option>
        <option value="Prince Edward Island">Prince Edward Island</option>
        <option value="Quebec">Quebec</option>
        <option value="Saskatchewan">Saskatchewan</option>
        
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Postal Code</label>
      <input name="postalCode" onChange={readData} placeholder="Enter Postal Code" type="text" class="form-control" />
    </div>
  </div>
  <input type="submit" value="Submit"/>
</form>
<br/>
<br/>
            <h4>Email: {data.email}</h4>
            <h4>Name: {data.name}</h4>
            <h4>Adress: {data.adress}</h4>
            <h4>City: {data.city}</h4>
            <h4>Province: {data.province}</h4>
            <h4>Postal Code: {data.postalCode}</h4>
        </div>
    )
}