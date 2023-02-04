import Sidenav from "./views/components/sidenav/Sidenav";
import Topbar from "./views/components/topbar/Topbar";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './views/components/dashboard/Dashbord'
import About from './views/components/about/About'
import GstClient from "./views/components/gstclient/GstClient";
import Service from './views/components/service/Service'
import Servicestracker from './views/components/servicetacker/Servicetacker'
//import { GetGstClientById, GetGSTClients } from "./service/GstClientService";
import './App.scss'
import GstForm from "./views/components/gstclient/GstClientCreate";
import GstEditing from "./views/components/gstclient/GstEditing";
import GstClientView from "./views/components/gstclient/GstClientView";

function App() {
 // GetGSTClients().then(res=>console.log(res.data))
  //GetGstClientById("78d280b9-9fb7-4922-9090-db636402ae64").then(res=>console.log(res.data))
  return (
    <div className="App">
       <Topbar/> 
      <div className="main">
       <Sidenav/>   
      <div className="other">
      <Router>
     
      <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/Gstclient" element={<GstClient />} />
      <Route exact path="/Service" element={<Service />} />
      <Route exact path="/servicetracker" element={<Servicestracker />} />
      <Route exact path="/gstform" element={<GstForm />} />
      <Route exact path="/gstedit" element={<GstEditing />} />
      <Route exact path="/gstview" element={<GstClientView />} />
      </Routes>
      
     </Router>
      </div>
      </div>
      
    </div>
  );
}

export default App;
