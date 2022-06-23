// CMS = Content Management System
// Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)

// Headless CMS (GraphCMS): Painel de ADMIN (todos fornecidos através de uma API REST ou GraphQL)
// React que consome essa API do CMS

// query / mutation
// query = buscar dados
// mutation = criar, alterar ou deletar dados

// Para consumir essa API do GraphCMS foi utilizado o Apollo

import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
