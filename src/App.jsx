import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            name="Gui Siebert"
            post="Hey gente"
          />
          <Post 
            name="Cairo Thomas"
            post="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        </main>
      </div>
    </div>
  )
}

export default App







      

