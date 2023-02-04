import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { Input } from '../../../shared/Input';
import {useLocation} from 'react-router-dom';
import {GetGstClientById, UpdateGSTClient} from './../../../service/GstClientService'
const GstEditing = () => {
  const location = useLocation();
  //Navigation
  let navigate = useNavigate();
  console.log(location.state)
  //getting Id

  const formik = useFormik({
    //Fetching values 
    initialValues: {
      proprietorName:location.state.proprietorName,
      gstin:location.state.gstin,
      contactName:location.state.contactName,
      gstUserName:location.state.gstUserName,
      gstUserPassword:location.state.gstEmailPassword,
      gstRegDate: new Date("2023-02-03"),
      gstSurrenderedDate:'2023-02-03',
      gstRelievedDate:'2023-02-03T11:19:57.149Z',
      gstAnnualTurnOver:100,
      mobileNumber:location.state.mobileNumber,
      phoneNumber:location.state.phoneNumber,
      contactEmailId:location.state.contactEmailId,
      gstEmailId:location.state.gstEmailId,
      gstEmailPassword:location.state.gstEmailPassword,
      gstRecoveryEmailId:location.state.gstRecoveryEmailId,
      gstRecoveryEmailPassword:location.state.gstRecoveryEmailPassword,
      ewayBillUserName:location.state.ewayBillUserName,
      ewayBillPassword:location.state.ewayBillPassword,
      rackFileNo:location.state.rackFileNo,
      tallyDataFilePath:location.state.tallyDataFilePath,
      statusId:0,

    },
//handleSubmitting
    onSubmit:values=>{
     // handleUpdate(values)
    }
  });
  //Update GstClient
    const handleUpdate= ()=>{
      var isoDategstregdate = new Date(formik.values.gstRegDate).toISOString();
      console.log(isoDategstregdate);
      formik.values.gstRegDate=isoDategstregdate;
      var isogstSurrenderedDate=new Date(formik.values.gstSurrenderedDate).toISOString();
      formik.values.gstSurrenderedDate=isogstSurrenderedDate;
      var isogstRelievedDate=new Date(formik.values.gstRelievedDate).toISOString();
      formik.values.gstRelievedDate=isogstRelievedDate;
        const data = Object.assign(formik.values,{id:location.state.id})
      try{
        UpdateGSTClient(data,location.state.id).then(res=>console.log(res.data))
      }catch(err){
        console.log(err)
      }
     
    }
  return (
    <div className='containerform'>
      <h1 className=' fromheading m-0 p-0'>Edit GST Client</h1>  
    <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-4">
    <div className="secondary-title my-2 p-3">GST Details</div>
    <Row className='my-3 ml-2' >
      <Col m={6} sm={12} lg={6}>
      <Input 
      name="proprietorName"
      id="proprietorName"
      onChange={formik.handleChange}
      value={formik.values.proprietorName}
      error={formik.errors.proprietorName}
      isTouched={formik.touched.proprietorName}
      label="ProprietorName"
      placeholder="Enter proprietorName"
      />
      </Col>
      
      <Col m={6} sm={12} lg={6} ml-0>
        
      <Input 
      name="gstin"
      id="gstin"
      label="GSTTIN"
      {...formik.getFieldProps("gstin")}
      />
      </Col>
      <Col m={6} sm={12} lg={6}>
      <Input 
      name="gstUserName"
      id="gstUserName"
      label="GST UserName"
      {...formik.getFieldProps("gstUserName")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="gstUserPassword"
      id="gstUserPassword"
      label="GSTUserPassword"
      {...formik.getFieldProps("gstUserPassword")}
      />
      </Col>
      <Col m={6} sm={12} lg={6}>
      <Input 
      name="gstEmailId"
      id="gstEmailId"
      label="GSTEmailId"
      {...formik.getFieldProps("gstEmailId")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="gstEmailPassword"
      id="gstEmailPassword"
      label="GSTEmailPassword"
      {...formik.getFieldProps("gstEmailPassword")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="gstRecoveryEmailId"
      id="gstRecoveryEmailId"
      label="GSTRecoveryEmailId"
      {...formik.getFieldProps("gstRecoveryEmailId")}
      />
      </Col>
      <Col m={6} sm={12} lg={6}>
      <Input 
      name="gstRecoveryEmailPassword"
      id="gstRecoveryEmailPassword"
      label="GSTRecoveryEmailPassword"
      {...formik.getFieldProps("gstRecoveryEmailPassword")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="gstRegDate"
      id="gstRegDate"
      type="date"
      label="GSTRegDate"
      {...formik.getFieldProps("gstRegDate")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="gstRelievedDate"
      id="gstRelievedDate"
      label="GSTRelievedDate"
      type="date"
      {...formik.getFieldProps("gstRelievedDate")}
      />
      </Col>
      <Col m={6} sm={12} lg={6}>
      <Input 
      name="gstAnnualTurnOver"
      id="gstAnnualTurnOver"
      label="GSTAnnualTurnOver"
      type="number"
      {...formik.getFieldProps("gstAnnualTurnOver")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="gstSurrenderedDate"
      id="gstSurrenderedDate"
      label="GSTSurrenderedDate"
      type="date"
      {...formik.getFieldProps("gstSurrenderedDate")}
      />
      </Col>
    </Row>
    <div className="secondary-title my-3 p-3 ">Contact Details</div>
      <Row  className='my-3 ml-2'>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="contactName"
      id="contactName"
      label="ContactName"
      {...formik.getFieldProps("contactName")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="contactEmailId"
      id="contactEmailId"
      label="ContactEmailId"
      {...formik.getFieldProps("contactEmailId")}
      />
      </Col>
        <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="mobileNumber"
      id="mobileNumber"
      label="MobileNumber"
      {...formik.getFieldProps("mobileNumber")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="phoneNumber"
      id="phoneNumber"
      label="PhoneNumber"
      {...formik.getFieldProps("phoneNumber")}
      />
      </Col>
       </Row>
       <div className="secondary-title my-3 p-3">Billing Details</div>
      <Row  className='my-3 ml-2'>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="ewayBillUserName"
      id="ewayBillUserName"
      label="EwayBillUserName"
      {...formik.getFieldProps("ewayBillUserName")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="ewayBillPassword"
      id="ewayBillPassword"
      label="EwayBillPassword"
      {...formik.getFieldProps("ewayBillPassword")}
      />
      </Col>
        <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="rackFileNo"
      id="rackFileNo"
      label="RackFileNo"
      {...formik.getFieldProps("rackFileNo")}
      />
      </Col>
      <Col m={6} sm={12} lg={6} ml-0>
      <Input 
      name="tallyDataFilePath"
      id="tallyDataFilePath"
      label="TallyDataFilePath"
      {...formik.getFieldProps("tallyDataFilePath")}
      />
      </Col>
     
      <Col m={6} sm={12} lg={6} ml-0>
      <label htmlFor="Statusid" className='ml-2'>
       Status ID
      </label>
      <select
        name="Statusid"
        type="number"
        {...formik.getFieldProps("statusId")}
        className='col-8 ml-1'
      >
       
        <option value="1" label="Active" />
        <option value="2" label="InActive" />
      
      </select>
      </Col>
       </Row>
    
       <button type="submit" className='btn  btn-block ' onClick={()=>handleUpdate()} >update</button>
  
 </form>
  

    </div>
  )
}

export default GstEditing