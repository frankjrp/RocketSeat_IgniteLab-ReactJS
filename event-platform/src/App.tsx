// CMS = Content Management System
// Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)

// Headless CMS (GraphCMS): Painel de ADMIN (todos fornecidos através de uma API REST ou GraphQL)
// React que consome essa API do CMS

// query / mutation
// query = buscar dados
// mutation = criar, alterar ou deletar dados

// Para consumir essa API do GraphCMS foi utilizado o Apollo

import { Event } from "./pages/Event"

function App() {
  return (
    <Event />
  )
}

export default App
