// @ts-nocheck
import Head from 'next/head';
import { CldImage, CldOgImage } from 'next-cloudinary';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js with Cloudinary!</title>
      </Head>

      <CldOgImage
        src="jason.af/jason-bg.jpg"
        alt="Jason Lengstorf"
        removeBackground
        underlay="jason.af/jason-and-marisa-barcelona"
        overlays={[
          {
            text: {
              color: 'white',
              fontFamily: 'Impact',
              fontSize: 250,
              text: 'BUTTS',
              border: '20px_solid_black',
              stroke: true,
            },
            position: {
              gravity: 'north',
              y: 80,
            },
          },
          {
            text: {
              color: 'white',
              fontFamily: 'Impact',
              fontSize: 250,
              text: 'ARE THE BEST',
              border: '20px_solid_black',
              stroke: true,
            },
            position: {
              gravity: 'south',
              y: 80,
            },
          },
        ]}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js with Cloudinary!</h1>

        <CldImage
          src="jason.af/jason-bg.jpg"
          alt="Jason Lengstorf"
          sizes="100vw"
          height={4267}
          width={6400}
          removeBackground
          underlay="jason.af/jason-and-marisa-barcelona"
          overlays={[
            {
              text: {
                color: 'white',
                fontFamily: 'Impact',
                fontSize: 250,
                text: 'BUTTS',
                border: '20px_solid_black',
                stroke: true,
              },
              position: {
                gravity: 'north',
                y: 80,
              },
            },
            {
              text: {
                color: 'white',
                fontFamily: 'Impact',
                fontSize: 250,
                text: 'ARE THE BEST',
                border: '20px_solid_black',
                stroke: true,
              },
              position: {
                gravity: 'south',
                y: 80,
              },
            },
          ]}
        />
      </main>
    </div>
  );
}
