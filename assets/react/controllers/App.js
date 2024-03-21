import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root')
const root = createRoot(container);
import { PrimeReactProvider } from 'primereact/api';
import Menu from './Menu'

class App extends React.Component {
    render() {
        return (
            <PrimeReactProvider>
                <Menu/>
            </PrimeReactProvider>

        )
    }
}
export default App;
root.render(<App />)