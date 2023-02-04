import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import{GetGstClientById} from '../../../service/GstClientService'
import './Gststyle.scss'
const GstClientView = () => {
    const [clientDetails, setClientDetails] = useState([])

    const location = useLocation();
    // const getdetails=() => {
      
    //         GetGstClientById(location.state.id).then(res=>setClientDetails(res.data))
      
    // }
   
  console.log("check",clientDetails)

  return (
    <div className='container ml-0'>
        <h1>Details of {location.state.proprietorName}</h1>
        {/* <div  className='head ml-5' style={{display:'flex'}}>
        <div className='heading' style={{justifyContent:"center",border:"2px solid black"}}>
           <h6> ID  </h6>
           <h6> proprietor Name  </h6>
           <h6> GSTTIN  </h6>
           <h6>  GST UserName  </h6>
           <h6> GSTUserhPassword  </h6>
           <h6> GSTEmailId  </h6>
           <h6>  GSTEmailPassword  </h6>
            <h6>  GSTRecoveryEmailId  </h6>
            <h6> GSTRecoveryEmailPassword  </h6>
            <h6> GSTRegDate  </h6>
            <h6> GSTRelievedDate  </h6>
            <h6> GSTAnnualTurnOver  </h6>
            <h6>  GSTSurrenderedDate  </h6>
            <h6>  ContactName  </h6>
            <h6>  ContactEmailId  </h6>
            <h6>  MobileNumber  </h6>
            <h6> phoneNumber  </h6>
            <h6> EwayBillUserName  </h6>
            <h6>  EwayBillhPassword  </h6>
              <h6>  RackFileNo  </h6>
              <h6> TallyDataFileh6ath  </h6>

        </div>
        <div className='details'>
           <p><b>:</b> {location.state.id}</p>
           <p><b>:</b> {location.state.proprietorName}</p>
           <p><b>:</b> {location.state.gstin}</p>
           <p><b>:</b> {location.state.gstUserName}</p>
           <p><b>:</b> {location.state.gstUserPassword}</p>
           <p><b>:</b> {location.state.gstEmailId}</p>
           <p><b>:</b> {location.state.gstEmailPassword}</p>
           <p><b>:</b> {location.state.gstRegDate}</p>
           <p><b>:</b> {location.state.gstRelievedDate}</p>
           <p><b>:</b> {location.state.gstAnnualTurnOver}</p>
           <p><b>:</b> {location.state.gstSurrenderedDate}</p>
           <p><b>:</b> {location.state.contactName}</p>
           <p><b>:</b> {location.state.contactEmailId}</p>
           <p><b>:</b> {location.state.mobileNumber}</p>
           <p><b>:</b> {location.state.phoneNumber}</p>
           <p><b>:</b> {location.state.ewayBillUserName}</p>
           <p><b>:</b> {location.state.ewayBillPassword}</p>
           <p><b>:</b> {location.state.rackFileNo}</p>
           <p><b>:</b> {location.state.tallyDataFilePath}</p>
           <p><b>:</b> {location.state.statusId}</p>
    
        </div>
        </div> */}
        <table class="table table-striped table-responsive ml-5">
    
    <tbody>
      <tr>
        <td>ID</td>
        <td>{location.state.id}</td>
      </tr>
      <tr>
        <td>proprietor Name</td>
        <td>{location.state.proprietorName}</td>
      </tr>
      <tr>
        <td>GSTTIN</td>
        <td>{location.state.gstin}</td>
      </tr>
      <tr>
        <td>GST UserName</td>
        <td>{location.state.gstUserName}</td>
      </tr>
      <tr>
        <td>GSTUser Password</td>
        <td>{location.state.gstUserPassword}</td>
      </tr>
      <tr>
        <td>GSTEmailId</td>
        <td>{location.state.gstEmailId}</td>
      </tr>
      <tr>
        <td>GSTEmailPassword</td>
        <td>{location.state.gstEmailPassword}</td>
      </tr>
      <tr>
        <td>GSTRecoveryEmailId</td>
        <td>{location.state.gstRecoveryEmailId}</td>
      </tr>
      <tr>
        <td>GSTRecoveryEmailPassword</td>
        <td>{location.state.gstRecoveryEmailPassword}</td>
      </tr>
      <tr>
        <td>GSTRegDate</td>
        <td>{location.state.gstRegDate}</td>
      </tr>
      <tr>
        <td>GSTRelievedDate</td>
        <td>{location.state.gstRelievedDate}</td>
      </tr>
      <tr>
        <td>GSTAnnualTurnOver</td>
        <td>{location.state.gstAnnualTurnOver}</td>
      </tr>
      <tr>
        <td>GSTSurrenderedDate</td>
        <td>{location.state.gstSurrenderedDate}</td>
      </tr>
      <tr>
        <td>ContactName</td>
        <td>{location.state.contactName}</td>
      </tr>
      <tr>
        <td>ContactEmailId</td>
        <td>{location.state.contactEmailId}</td>
      </tr>
      <tr>
        <td>MobileNumber</td>
        <td>{location.state.mobileNumber}</td>
      </tr>
      <tr>
        <td>phoneNumber</td>
        <td>{location.state.phoneNumber}</td>
      </tr>
      <tr>
        <td>EwayBillUserName</td>
        <td>{location.state.ewayBillUserName}</td>
      </tr>
      <tr>
        <td>EwayBillhPassword</td>
        <td>{location.state.ewayBillPassword}</td>
      </tr>
      <tr>
        <td>RackFileNo</td>
        <td>{location.state.rackFileNo}</td>
      </tr>
      <tr>
        <td>TallyDataFileh6ath</td>
        <td>{location.state.tallyDataFilePath}</td>
      </tr>
      <tr>
        <td>Status Id</td>
        <td>{location.state.statusId}</td>
      </tr>
    </tbody>
  </table>
</div>

   
  )
}

export default GstClientView