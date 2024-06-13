import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Toaster position='top-right' reverseOrder={false} />
  </BrowserRouter>
);
