import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import profile from '../../assets/profile.jfif';
import add from './Add_Employee.module.css';
const Add_Employee = () => {
    const navigate = useNavigate();
 
    let [AddTenant, setAddTenant] = useState({
        email:'',
        surname:'',
        name:'',
        phoneNumber:'',
        occupation:''
    });

    const [file,setfile] = useState(null);
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setAddTenant(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const Add_Employee = async () =>{
        
        var regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

        if(!AddTenant.email) return alert('Please enter Email Address');
        if(!regEmail.test(AddTenant.email)) return alert('Enter valid email');
        if(!AddTenant.surname) return alert('Please enter Surname');
        if(!AddTenant.name) return alert('Please enter name(s)');
        if(!AddTenant.phoneNumber) return alert('Please enter Phone number');
        if(!AddTenant.occupation) return alert('Please enter Occupation');

        const formData = new FormData();
        formData.append('photo',file);
        formData.append('email',AddTenant.email);
        formData.append('name',AddTenant.name);
        formData.append('surname',AddTenant.surname);
        formData.append('occupation',AddTenant.occupation);
        formData.append('phoneNumber',AddTenant.phoneNumber);
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        };
        console.log(formData)
        const axios = require('axios');
        const registeredTasks = await axios.post('http://localhost:3030/tenant/add_tenant', formData,config);
        if(registeredTasks.data.result === true){
            navigate('/home')
            alert('success')
        }
        
    }
 
    return (
        <body className={add.add}>
            <div className={add.main}>
                <h1>Register New Employee</h1>
                <div id={add.info}>
                    <div id={add.profile}>
                        <img src={profile} alt="profile" />
                        <input type="file" name="photo" id={add.uploadProfile}  onChange={onInputChange}/>
                        <button><label for={add.uploadProfile} >Upload</label></button>
                    </div>

                    <div className={add.formGroup}>
                        <input type="text" name="surname" className={add.controlForm} placeholder="Surname" 
                        value={AddTenant.surname} onChange={handleChange}/>
                    </div>

                    <div className={add.formGroup}>
                        <input type="text" name="name" className={add.controlForm} placeholder="Names" 
                        value={AddTenant.name} onChange={handleChange}/>
                    </div>

                    <div className={add.formGroup}>
                        <input type="text" name="email" className={add.controlForm} placeholder="Email Address" 
                        value={AddTenant.email} onChange={handleChange}/>
                    </div>

                    <div className={add.formGroup}>
                        <input type="tel" name="phoneNumber" className={add.controlForm} placeholder="Phone Number" 
                        value={AddTenant.phoneNumber} onChange={handleChange}/>
                    </div>

                    <div className={add.formGroup}>
                        <input type="text" name="occupation" className={add.controlForm} placeholder="Occupation" 
                        value={AddTenant.occupation} onChange={handleChange}/>
                    </div>

                    <div className={add.formGroup} for="updateButton">
                        <button className={add.btn} for="updateButton" onClick={Add_Employee}>Register New Employee</button>
                    </div>
                </div>
            </div>

        </body>
    );
}


export default Add_Employee;