// * IMPORTS
// Functions
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Loading from './pages/Loading';
const Home      = lazy(() => import('./pages/Home'))
const NotFound  = lazy(() => import('./pages/NotFound'));

// * APP
export default function App() {
  // Render Application
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
      <Routes>

        {/* Main Page */}
        <Route path="/" element={ <Home/> }/>

        {/* Not Found */}
        <Route path="*" element={ <NotFound/> }/>

      </Routes>
      </Suspense>
    </div>
  )
}