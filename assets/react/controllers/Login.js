// import React, { useState } from 'react';
// import { InputText } from 'primereact/inputtext';
// import { Password } from 'primereact/password';
// import { Button } from 'primereact/button';

// export default function (props) {
//     const [value, setValue] = useState('');
//     const [items, setItems] = useState([]);

//     const search = (event) => {
//         setItems([...Array(10).keys()].map(item => event.query + '-' + item));
//     }
//     return <div className="card flex justify-content-center">
//         <form>
//             <div className="p-inputgroup flex-1">
//                 <span className="p-inputgroup-addon">
//                     <i className="pi pi-user"></i>
//                 </span>
//                 <InputText placeholder="Username" name="_username" id="username" />
//             </div>
//             <br />
//             <div className="p-inputgroup flex-1">
//                 <span className="p-inputgroup-addon">
//                     <i className="pi pi-lock"></i>
//                 </span>
//                 <Password value={value} placeholder="Password" name="_password" id="password" onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
//             </div>
//             <br />
//             <div className='p-input-group flex-1'>
//             <Button label="Submit" type="submit" icon="pi pi-check" />

//             </div>
 
//         </form>
//     </div>
// }
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Dodajemy nowy stan loggedIn


    const handleLogin = (event) => {
        event.preventDefault(); 
        fetch('/api_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (response.ok) {
                // Jeśli logowanie zakończyło się sukcesem, tutaj możesz przekierować użytkownika lub wykonać inne działania
                console.log("Login successful!");
                setLoggedIn(true); // Ustawiamy stan loggedIn na true

            } else {
                console.error("Login failed!");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    if (loggedIn) {
        window.location.href = "/home";
    }
    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleLogin}>
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <br />
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password value={password} placeholder="Password" feedback={false} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div className='p-input-group flex-1'>
                    <Button label="Login" type="submit" icon="pi pi-check" />
                </div>
            </form>
        </div>
    );
}
