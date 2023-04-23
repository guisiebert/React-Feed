import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/maykbrito.png",
          name: "Mayk Fernandes",
          role: "CTO @ Rocketseat"
      },
      content: [
          {type: "paragraph", content: "Fala galeraa 👋" },
          {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
          {type: "link", content: "jane.design/doctorcare" }
      ],
      publishedAt: new Date('2023-04-21 05:23:23'),
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/guisiebert.png",
          name: "Guirbes",
          role: "CTO @ MyHouse"
      },
      content: [
          {type: "paragraph", content: "Muchachos lindos" },
          {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
          {type: "link", content: "wilson.com" }
      ],
      publishedAt: new Date('2023-04-21 05:23:23'),
  },
]


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => { return (
            <Post
              author={post.author} 
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id}
            />
          )})}
        </main>
      </div>
    </div>
  )
}

export default App







      

