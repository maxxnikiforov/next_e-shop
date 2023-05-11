import Image from 'next/image'
import Head from 'next/head'
import styles from './page.module.css'
import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://app.snipcart.com" />
    <link rel="preconnect" href="https://cdn.snipcart.com" />
    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
    </Head>
    <main className={styles.main}>

        <div className={styles.grid}>
          {products.map(product => {
            return (
             <div key={product.id} className={styles.card}>
               <img className={styles.picture} src={product.image} alt={`Preview of ${product.title}`} />
               <h3>{ product.title }</h3>
               <p>{ product.description }</p>
               <p>${ product.price }</p>
               <p>
               <button className="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}
               >
                 Add to Cart
               </button>
               </p>
             </div>
            );
          })}
        </div>
       
    </main>

    <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="YzMzYmVhNDctZDVjMC00OWZmLWIyYTItZGY5ZTk2MDZiNzhiNjM4MTkzOTg1NzQ0NzE3NjUw" />
    </div>
  )
}
