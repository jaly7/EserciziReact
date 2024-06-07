import { useEffect, useState } from "react";

function Ora() {
    const [ora, setOra] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setOra(new Date())
        }, 1000);
        return () => clearInterval(interval)
    },[ora])
    return (
        <div>
        <h2>ORA IN ITALIA:</h2>
        <div style={{fontSize:'20px', fontWeight:'800'}}>{ora.toLocaleTimeString()}</div>            
        </div>

    )
}
export default Ora 