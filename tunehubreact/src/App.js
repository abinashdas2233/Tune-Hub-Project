import logo from './logo.svg';
import './App.css';
import { Route, Routes , Switch} from 'react-router-dom';
import Index from './mycomponent/Index';
import Register from './mycomponent/Mapregister'
import Mapregister from './mycomponent/Mapregister';
import Maplogin from './mycomponent/Maplogin';
import Customerhome from './mycomponent/Customerhome'
import Payment from './mycomponent/Payment';
import Adminhome from './mycomponent/Adminhome';
import Aaddsongs from './mycomponent/Aaddsongs'
import Aviewsongs from './mycomponent/Aviewsongs'
import Customerdetails from './mycomponent/Customerdetails';
import Customerviewsongs from './mycomponent/Customerviewsongs';
import Customercomplaint from './mycomponent/Customercomplaint';
import Admincomplaint from './mycomponent/Admincomplaint';




function App() {
  return (
   <div>
    <Routes>
    <Route path='/' element={<Index/>}></Route>
    <Route path='/register' element={<Mapregister/>}></Route>
    <Route path='/login' element={<Maplogin/>}></Route>
    <Route path='/ds' element={<Customerhome/>}></Route>
    <Route path='/py' element={<Payment/>}></Route>
    <Route path='/ah' element={<Adminhome/>}></Route>
    <Route path='/redirectToPage' element={<Payment />} />
    <Route path='/ass' element={<Aaddsongs />} />
    <Route path='/vss' element={<Aviewsongs/>}/>
    <Route path='/vcd' element={<Customerdetails/>}/>
    <Route path='/cps' element={<Customercomplaint/>}/>
    <Route path='/fcc' element={<Admincomplaint/>}/>
    
    
    <Route path='/cvs' element={<Customerviewsongs/>}/>
    
    
    </Routes>
   </div>
  );
}

export default App;
