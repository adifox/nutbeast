import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Styles
import styles from './styles.module.css'

const CONTACT_US = 'Adelante'
const SENDING = 'Enviando'

const ContactForm = ({ click }) => {
  const [positiveResponse, setPositiveResponse] = useState(false)
  return (
    <>
      <div className={styles.formContainer}>
        <h2>Despierta la bestia en ti.</h2>
        <div>
          {positiveResponse && (
            <div className={styles.thanksBox}>
              <h3>
                Muchas gracias, en breve nos pondremos en contacto contigo.
              </h3>
              <button
                aria-label='Cerrar'
                className={styles.thanksButton}
                onClick={() => click()}
              >
                Genial
              </button>
            </div>
          )}
          {!positiveResponse && (
            <Formik
              initialValues={{ email: '', name: '', message: '' }}
              validate={(values) => {
                const errors = {}
                if (!values.email) {
                  errors.email = 'Obligatorio'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Email no valido'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                axios
                  .post('/api/mailer', values)
                  .then((response) => {
                    setSubmitting(false)
                    resetForm()
                    setPositiveResponse(true)
                  })
                  .catch((err) => console.log('AXIOS POST ERROR', err))
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className={styles.formWrapper}>
                    <div className={styles.textFieldWrapper} id='contactForm'>
                      <label htmlFor='message'>Mensaje: </label>
                      <Field
                        name='message'
                        component='textarea'
                        className={styles.textField}
                      />
                    </div>
                    <div className={styles.nameMailFields}>
                      <div className={styles.inputFieldWrapper}>
                        <label htmlFor='name'>Nombre: </label>
                        <Field
                          type='text'
                          name='name'
                          className={styles.inputField}
                        />
                        <ErrorMessage name='name' component='div' />
                      </div>
                      <div className={styles.inputFieldWrapper}>
                        <label htmlFor='email'>Email: </label>
                        <Field
                          type='email'
                          name='email'
                          className={styles.inputField}
                        />
                        <ErrorMessage name='email' component='div' />
                      </div>
                    </div>
                    <div className={styles.ctButtonWrapper}>
                      <button
                        type='submit'
                        aria-label='Mandar Formulario'
                        disabled={isSubmitting}
                        className={
                          !isSubmitting
                            ? styles.contactButton
                            : styles.contactButtonSending
                        }
                      >
                        {!isSubmitting ? CONTACT_US : SENDING}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
      <div className={styles.backgroundContainer} onClick={() => click()}></div>
    </>
  )
}

export default ContactForm
