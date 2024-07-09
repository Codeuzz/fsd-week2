import Username from "./Username"
import Mdp from "./Mdp"
import IsVendor from "./IsVendor"
import Save from "./Save"
import { useState } from "react"

function Form({onSave}) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isVendor, setIsVendor] = useState(false);
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        console.log(users)
        if (e.target.name === 'username') {
          setUsername(e.target.value);
        } else if (e.target.name === 'password') {
          setPassword(e.target.value);
        } else if(e.target.name ==='select') {
            setIsVendor(e.target.value)
        }
      }



    const saveInfos = (e) => {
        e.preventDefault();
        const newUser = { username: userName, password: password, isVendor: isVendor };
        setUsers([...users, newUser]);
        setUsername('');
        setPassword('');
        setIsVendor(false)
        onSave(users)
    }

    return (
        <form className="market-form">
            <Username handleChange={handleChange} />
            <Mdp handleChange={handleChange} />
            <IsVendor handleChange={handleChange} isVendor={isVendor} /> 
            <Save saveInfos={saveInfos} />
        </form>
    )
}

export default Form