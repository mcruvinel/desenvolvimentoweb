import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Dash from "./dash";
import PlanoRio from "./Plano_Riodejaneiro";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dash" element={<Dash/>}/>
        <Route exact path="/Plano_Riodejaneiro" element={<PlanoRio/>}/>
      
    </Routes>
)
export default Main;


