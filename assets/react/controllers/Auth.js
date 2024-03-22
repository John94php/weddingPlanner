import React from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import AuthMenu from './AuthMenu';
class AuthApp extends React.Component {
    render() {
        return (
            <PrimeReactProvider>
                <AuthMenu/>
            </PrimeReactProvider>

        )
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const authRootContainer = document.getElementById('auth_root');

    // Sprawdzenie, czy kontener istnieje
    if (authRootContainer !== null) {
        const authRoot = createRoot(authRootContainer);
        authRoot.render(<AuthApp/>)

    } else {
        console.error('Auth root container not found');
    }
});
