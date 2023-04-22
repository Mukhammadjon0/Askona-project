import React, { useContext } from 'react'
import { StateContext } from '../../context'

function Location() {
    const { lang } = useContext(StateContext)
    return (
        <div className='my-10 mx-auto container'>
            <h1 className='text-2xl font-extrabold my-5'>{lang === 'ru' ? 'Адрес' : 'Manzil'}</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1640.4445083693254!2d70.91082264052558!3d40.57714732053692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM0JzM2LjYiTiA3MMKwNTQnNDIuNCJF!5e0!3m2!1suz!2s!4v1678949835922!5m2!1suz!2s"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}

export default Location