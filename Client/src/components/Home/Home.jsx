import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import bruno from '../../assets/pexels-bruno-salvadori-2269872.jpg';
import bin from '../../assets/delete.png';
import Header from '../header/Header';
import home from './Home.module.css';
import Search from "../Search/Search";
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const navigate = useNavigate();
    const axios = require('axios');
    let [TenantList, setTenantList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3030/tenant/getAllTenants/`).then((response) => setTenantList(response.data));
    });

    const EditTenant = (tenantId) => {
        localStorage.setItem('TenantId', tenantId.toString())
        navigate('/edit')
    }

    const deleteTenant = async (tenantId) => {
        await axios.delete(`http://localhost:3030/tenant/deleteTenat/${tenantId}`);
    }

    return (
        <body className={home.home}>

            <Header></Header>
            <Search></Search>
            <div className={home.groupList}>
                {TenantList.map((listOfTenants) => (
                    <div className={home.formGroup} key={listOfTenants._id}>
                        <label onClick={() => EditTenant(listOfTenants._id)}>
                            <div className={home.userData}><img src={bruno} alt="img" /></div>
                            <div className={home.groupData}>
                                <p id={home._name}>{listOfTenants.name} {listOfTenants.surname}</p>
                            </div>
                            <div className={home.groupData}>
                                <p id={home._role}>{listOfTenants.occupation}</p>
                            </div>
                            <div className={home.groupData}>
                                <div className={home.progress}>
                                    <ProgressBar now={listOfTenants.progress} />
                                    <div className="progress-bar progress-bar-striped " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" now={60} style={{ width: "25%" }}></div>
                                </div>
                                {listOfTenants.progress}

                            </div>
                        </label>
                        <div className={home.delete}>
                            <img src={bin} alt="Delete" className={home.icon} onClick={() => deleteTenant(listOfTenants._id)} />
                        </div>
                    </div>
                ))}
            </div>

        </body>
    );

}

export default Home;