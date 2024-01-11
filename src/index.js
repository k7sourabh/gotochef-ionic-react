import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { createStore } from './services/Storage';
import { AuthProvider } from './context/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);
const setupStore = async () => {
    await createStore("go-to-chef-storage");
}
setupStore();
root.render(
    <Provider store={store}>
        <AuthProvider>
        <App />
        </AuthProvider>
    </Provider>
);