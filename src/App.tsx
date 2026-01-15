import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PostList from './pages/PostList';
import PhotoList from './pages/PhotoList';
import ListaUtenti from './pages/ListaUtenti';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1000,
      retry: 3
    }
  }
});

//<Counter/> è un tag che si autochiude perchè non ha contenuto qui
function App(){


  return( //Vuole 1 SOLO return
    <>

    <QueryClientProvider client={client}>
      <BrowserRouter>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/login'>Login</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/listaUtenti'>Lista Utenti</Link>
          <Link to='/listaPhoto'>Lista Photo</Link>
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/posts' element={<PostList/>}/>
          <Route path='/listaUtenti' element={<ListaUtenti/>}/>
          <Route path='/listaPhoto' element={<PhotoList/>}/>
          </Routes>
      </BrowserRouter>

    </QueryClientProvider>
</>

  )
}
export default App;
