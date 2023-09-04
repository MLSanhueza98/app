
import ReactDOM from 'react-dom/client'
import { Home, PokeDetails } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.scss'
import PokemonProvider from './context/pokemonContext'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />
  },
  {
    path: "/:pokeId",
    element: <PokeDetails />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PokemonProvider> 
    <RouterProvider router={router} />
  </PokemonProvider>
)
