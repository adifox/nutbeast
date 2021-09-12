import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import ContactBubble from '../components/ContactBubble'
import ContactForm from '../components/ContactForm'

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isContactModalOpen, setContectModal] = useState(false)

  const contactModalHandler = () => {
    setContectModal(!isContactModalOpen)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Nutbeast</title>
        <meta
          name='description'
          content='Nutbeast, el lado más bestia de los frutos secos.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.mainWrapper}>
        <div className={styles.sideBar}>
          <div className={styles.sideBarHeader}>
            <ContactBubble click={contactModalHandler} />
            <p>
              Powered by{' '}
              <span className={styles.logo}>
                <Image
                  src='/images/Logo-Transparente-negro.png'
                  alt='Nutbeast Logo'
                  width={144}
                  height={32}
                />
              </span>
            </p>
          </div>
          <div className={styles.sideBarBody}>
            <h1>El lado más bestia de los frutos secos.</h1>
            <h2>
              Aunque nosotros conocemos la calidad, queremos saber tu opinión
              sobre nuestro producto.
            </h2>
            <p>
              Te prometemos no spamearte. Los primeros 150 en registrarse
              recibirán el primer lote de producción gratis.
            </p>
          </div>
          <div className={styles.socialFooter}>
            <h2>Síguenos en nuestros redes.</h2>
            <div className={styles.socialIcons}>
              <a
                className={styles.icon}
                href='https://www.instagram.com/nutbeast_official'
                aria-label='La pagina oficial de Instagram de Nut Beast'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className={styles.icon}
                href='https://www.facebook.com/nutbeast.official/'
                aria-label='La pagina oficial de Facebook de Nut Beast'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.imageBox}>
          <div className={styles.firstTwoImages}>
            <div className={styles.black}>
              <Image
                src='/images/black.jpg'
                alt='Nutbeast Logo'
                // layout='fill'
                width={1024}
                height={680}
              />
            </div>
            <div className={styles.brown}>
              <Image
                src='/images/brown.jpg'
                alt='Nutbeast Logo'
                // layout='fill'
                width={1024}
                height={680}
              />
            </div>
          </div>
          <div className={styles.nextTwoImages}>
            <div className={styles.white}>
              <Image
                src='/images/white.jpg'
                alt='Nutbeast Logo'
                // layout='fill'
                width={1024}
                height={680}
              />
            </div>
            <div className={styles.green}>
              <Image
                src='/images/green.jpg'
                alt='Nutbeast Logo'
                // layout='fill'
                width={1024}
                height={680}
              />
            </div>
          </div>
        </div>
        {isContactModalOpen && <ContactForm click={contactModalHandler} />}
      </main>
    </div>
  )
}
