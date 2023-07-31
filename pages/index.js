import Link from 'next/link'
import Styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={Styles.title}>
          Homepage
        </h1>
        <p className={Styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem sed repellendus eligendi error soluta itaque esse provident maiores qui, delectus adipisci mollitia earum expedita laudantium! Dolores voluptatibus rem sed voluptates quis repellat illo aut. Autem recusandae fugiat possimus nulla amet, expedita molestiae quod, nesciunt illo quibusdam, deleniti ipsa sequi.</p>
        <p className={Styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique officia, doloribus, quaerat aut laboriosam odio animi obcaecati ipsum incidunt voluptatem nihil porro, quis eligendi quidem dicta veniam suscipit necessitatibus? Repudiandae, quasi cumque sed reiciendis animi fugit nobis accusamus molestiae inventore impedit placeat voluptate voluptas doloremque recusandae eius dolorum natus maxime?</p>
        <Link href={"/ninjas"} legacyBehavior><a className={Styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
} 
