import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js with Cloudinary!</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js with Cloudinary!</h1>

        <img
          src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_500,h_500,c_thumb,g_faces,z_0.75/press/jason-lengstorf-ac-alley3.jpg"
          alt="Jason Lengstorf"
        />
      </main>
    </div>
  );
}
