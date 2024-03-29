import React from 'react';
import { createRoot } from 'react-dom/client';
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
document.addEventListener('DOMContentLoaded', function() {
    const RootContainer = document.getElementById('root');

    // Sprawdzenie, czy kontener istnieje
    if (RootContainer !== null) {
        const Root = createRoot(RootContainer);
        Root.render(<App/>)

    } else {
        console.error('root container not found');
    }
});
