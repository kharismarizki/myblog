import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div>
      <Header />      

      <main className="container">
      <Jumbotron />

  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>

      <Article />
      <Pagination />

    </div>

    <Sidebar />

  </div>

</main>

      <Footer />
    </div>
  )
}
