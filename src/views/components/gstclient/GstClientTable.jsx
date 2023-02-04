/* eslint-disable no-undef */
import React ,{useState,useEffect} from 'react'
import { GetGSTClients , DeleteGSTClient } from '../../../service/GstClientService'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {FormModel} from '../../../shared/FormModel'

import GstForm from './GstClientCreate'
import GstEditing from './GstEditing';
const GstClientTable = (props) => {
  const [showAdd,setShowAdd] = useState(false)
  // const [showEdit,setShowEdit] = useState(GoEdit())
  let navigate = useNavigate();
  const columns = [
    
    {title: "proprietorName", field:"proprietorName"},
    {title: "GST Tin No", field:"gstin"},
    {title: "GST UserName", field:"gstUserName"},
    {title: "gstEmailId", field:"gstEmailId"},
    {title: "phoneNumber", field:"phoneNumber"},
    {title: "rackFileNo", field:"rackFileNo"},
    {title: "statusId", field:"statusId"},
  ]
    const [list, setList] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    //getting client details
    const GetDetails = ()=>{
        GetGSTClients().then((res)=>{setList(res.data.result)})
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/gstedit', { state: item })
  }
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/gstview', { state: item })
}
  const deleteGSTClient = (item)=>{
    console.log(props , item)
    DeleteGSTClient(item.id).then((res)=>{
      GetDetails();
    })
}

  
  return (
    <div className='container'>
      <div className='headcontainer'>
        <h1 className="heading">GST Client details</h1>
        <Link to="/gstform"> <button className='btn btn-success ml-3' >Add</button></Link>
        {/* <button className='btn btn-success ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2'>
        <MaterialTable
           title="GST Clients"
           data={list}
           columns={columns}
           actions={[
            rowData=>({icon: ()=><FaEdit/>,
            tooltip: 'edit User',
            onClick:(event,rowData)=>GoEdit(rowData)
            }),
            rowData=>({icon: ()=><BsEye/>,
            tooltip: 'view User',
            onClick:(event,rowData)=>GoView(rowData)
            }),
            rowData=>( {
              icon: 'delete',
              tooltip: 'dalete User',
              onClick:(event,rowData)=>deleteGSTClient(rowData)
            }),
          ]}
          options={{
            exportButton: true,
            actionsColumnIndex: -1
          }}
        />
      </div>
      
      {/* <FormModel
                        show={showAdd}
                        onHide={() =>setShowAdd(false)}
                        submitButtonText={'CREATE'}
                        title={'Create Gst'}
                    >
                        <GstForm onHide={() =>setShowAdd(false)  } />
                    </FormModel> */}
                    {/* <FormModel
                        show={showEdit}
                        onHide={() =>setShowAdd(false)}
                        submitButtonText={'CREATE'}
                        title={'Create Gst'}
                    >
                        <GstEditing onHide={() =>setShowAdd(false)  } />
                    </FormModel> */}
  </div>
  )
}

export default GstClientTable