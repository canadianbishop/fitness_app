import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";


const ProtectedRoute = ({children})=>{

const {user} = useContext(AuthContext);

if(!user){
      return <Navigate to='/' replace/>
}

return children

}

export default ProtectedRoute