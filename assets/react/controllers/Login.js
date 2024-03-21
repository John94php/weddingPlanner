import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function (props) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }
    return <div className="card flex justify-content-center">
        <form>
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>
            <br />
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                </span>
                <Password value={value} placeholder="Password" onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
            </div>
            <br />
            <div className='p-input-group flex-1'>
            <Button label="Submit" type="submit" icon="pi pi-check" />

            </div>
 
        </form>
    </div>
}