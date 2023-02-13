// * IMPORTS
// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Functions
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App'

// * STYLES
// Libraries
import 'normalize.css';
import 'animate.css';

// Core + Containers + Interfaces
import './theme/styles/core/index.css';
import './theme/styles/core/anims.css';
import './theme/styles/core/sections.css';

import './theme/styles/containers/form.css';
import './theme/styles/containers/footer.css';
import './theme/styles/containers/loading.css';
import './theme/styles/containers/notfound.css';
import './theme/styles/containers/results.css';

import './theme/styles/interfaces/dropdown.css';
import './theme/styles/interfaces/nav.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    {/* Wrap Application in Browser Router */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>,
)