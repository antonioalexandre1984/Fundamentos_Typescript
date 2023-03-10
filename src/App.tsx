import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'
import { Post } from "./components/Post"


function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/antonioalexandre1984.png',
        name: 'Lucas',
        role: 'Front-end Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala Galera ✋' },
        { type: 'paragraph', content: 'Hoje vamos falar sobre ReactJS' },
        { type: 'link', content: 'antonioalexandre1984/rocketseat/ignite' },
      ],
      publishedAt: new Date('2022-09-14 08:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/antonioalexandre1984.png',
        name: 'Pedro',
        role: 'Back-end Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala Galera ✋' },
        { type: 'paragraph', content: 'Hoje vamos falar sobre o que é o ReactJS e como ele funciona.' },
        { type: 'link', content: 'antonioalexandre1984/rocketseat/ignite' },
      ],
      publishedAt: new Date('2022-09-15 08:00:00'),
    },
  ];


  return (
    <div className="">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main className="">
          {posts.map((post, i) => {
            return (
              <Post
                key={i}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
