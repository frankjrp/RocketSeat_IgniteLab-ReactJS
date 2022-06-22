// CMS = Content Management System
// Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)

// Headless CMS (GraphCMS): Painel de ADMIN (todos fornecidos através de uma API REST ou GraphQL)
// React que consome essa API do CMS

// query / mutation
// query = buscar dados
// mutation = criar, alterar ou deletar dados

// Para consumir essa API do GraphCMS foi utilizado o Apollo

import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
