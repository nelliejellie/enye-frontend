import React, {useState, useEffect} from 'react';
import Card from './card.js';
import Pagination from './pagination.js';
import {FontAwesome} from 'react-icons/fa';
import {FaMobile} from "react-icons/fa";
import {FaCreditCard} from "react-icons/fa";


const DataBlock = (props) => {
    //useState hook
    const [users, setusers] = useState({});
    const [profile, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);


    //get current posts usig pagination
    const indexOfLastProfile = currentPage * postPerPage;
    const indexOfFirstProfile = indexOfLastProfile - postPerPage;
    const currentProfiles = profile.slice(indexOfFirstProfile, indexOfLastProfile)
    
    //function to paginate
    const paginate = pageNumber => setCurrentPage(pageNumber);


    useEffect(function(){
        getData()
    }, [])

    //async function to get data
    const getData = async()=>{
        var res =  await fetch('https://api.enye.tech/v1/challenge/records')
        //var res =  await fetch('http://jsonplaceholder.typicode.com/users/1')
        var users =  await res.json()
        setusers(users)
        console.log(users.records.profiles)
        setProfiles(users.records.profiles)
        setLoading(true)
    }

    if (loading){
    return (
        <div>
            {
                currentProfiles.map(prof =>(
                    <Card key={prof.id}>
                        <h1>{prof.FirstName} {prof.LastName}({prof.UserName})</h1>
                        <div className='emailandPhonenumber'>
                            <p>{prof.Email}</p>
                            <p><FaMobile />: {prof.PhoneNumber}</p>
                        </div>
                        <div className='otherData'>
                            <div className='otherDataLeft'>
                                <p>Gender: {prof.Gender}</p>
                                <p><FaCreditCard /> {prof.CreditCard}</p>
                                <p>creditcardtype: {prof.CreditCardType}</p>
                                <p>Domain name: {prof.DomainName}</p>
                                <p>URL: {prof.URL}</p>
                            </div>
                            <div className='otherDataRight'>
                                <p>LastLogin: {prof.LastLogin}</p>
                                <p>Latittude:{prof.Latitude}</p>
                                <p>Longitude:{prof.Longitude}</p>
                                <p>Payment method: {prof.PaymentMethod}</p>
                                <p>MacAddress: {prof.MacAddress}</p>    
                            </div>
                        </div>
                    </Card>
                    ))
            }
            <div>
                <Pagination profilePerPage={postPerPage} totalPages={profile.length} paginate={paginate}/>
            </div>
        </div>
    )
    }else{
        return (
            <div>
                loading....
            </div>
        )
    }
}

export default DataBlock;

