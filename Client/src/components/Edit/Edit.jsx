import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import profile from '../../assets/profile.jfif';
import edit from'./Edit.module.css';
const Edit = () => {
    const navigate = useNavigate();

    let TenantId  = localStorage.getItem("TenantId")
    let [UpdateTenant, setUpdateTenant] = useState([]);
    const axios = require('axios');
    let url = `http://localhost:3030/tenant/getTenantById/${TenantId}`;
    useEffect(() => {
        axios.get(url).then((response) => setUpdateTenant(response.data));
    })

    let [TenantUpdate, setTenantUpdate] = useState({
        email:'',
        surname:'',
        name:'',
        phoneNumber:'',
        occupation:'',
        progress:''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setTenantUpdate(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const Update_Tenant = async () =>{

        if(TenantUpdate.email === '' && TenantUpdate.surname === '' && TenantUpdate.name === '' && TenantUpdate.phoneNumber === '' && TenantUpdate.occupation === ''
        && TenantUpdate.progress === ''){
            return alert("Cannot update nothing")
        }


        if(!TenantUpdate.email){
            TenantUpdate.email=UpdateTenant.email;
        }
        if(!TenantUpdate.surname){
            TenantUpdate.surname=UpdateTenant.surname;
        }
        if(!TenantUpdate.name){
            TenantUpdate.name = UpdateTenant.name;
        }
        if(!TenantUpdate.phoneNumber){
            TenantUpdate.phoneNumber = UpdateTenant.phoneNumber;
        }
        if(!TenantUpdate.occupation){
            TenantUpdate.occupation = UpdateTenant.occupation;
        }
        if(!TenantUpdate.progress){
            TenantUpdate.progress = UpdateTenant.progress;
        }
       await axios.put(`http://localhost:3030/tenant/updateTenant/${TenantId}`, TenantUpdate);
        navigate('/home')
    }
    return (
        <body className={edit.edit}>
            <div className={edit.main}>

                <h1>Update Employee Details</h1>
                <div id={edit.info}>
                    <div id={edit.profile}>
                        <img src={profile} alt="profile"/>
                        <input type="file" name="profile" id={edit.uploadProfile} />
                        <button><label for={edit.uploadProfile} >Upload</label></button>
                    </div>

                    <div className={edit.formGroup}>
                        <input type="text" name="surname" className={edit.controlForm} placeholder={UpdateTenant.surname} 
                        value={TenantUpdate.surname} onChange={handleChange}/>
                    </div>

                    <div className={edit.formGroup}>
                        <input type="text" name="name" className={edit.controlForm} placeholder={UpdateTenant.name} 
                        value={TenantUpdate.name} onChange={handleChange}/>
                    </div>

                    <div className={edit.formGroup}>
                        <input type="text" name="email" className={edit.controlForm} placeholder={UpdateTenant.email}
                        value={TenantUpdate.email} onChange={handleChange} />
                    </div>

                    <div className={edit.formGroup}>
                        <input type="tel" name="phoneNumber" className={edit.controlForm} placeholder={UpdateTenant.phoneNumber} 
                        value={TenantUpdate.phoneNumber} onChange={handleChange}/>
                    </div>

                    <div className={edit.formGroup}>
                        <input type="text" name="occupation" className={edit.controlForm} placeholder={UpdateTenant.occupation} 
                        value={TenantUpdate.occupation} onChange={handleChange}/>
                    </div>

                    <div className={edit.formGroup}>
                        <input type="tel" name="progress" className={edit.controlForm} placeholder={UpdateTenant.progress} 
                        value={TenantUpdate.progress} onChange={handleChange}/>
                    </div>

                    <div className={edit.formGroup} for="updateButton">
                        <button className={edit.btn} for="updateButton" onClick={Update_Tenant}>Update </button>

                    </div>
                </div>
            </div>
        </body>

    );
}


export default Edit;