import React, { useState } from 'react'

import Layout from './Layout'

import styles from '../../styles/universityAdmin/index.module.css'

export default function UniversityAdmin() {

    return (
        <Layout>
            <div className='index'></div>
            Bun venit in panoul de administrare al universitatii.
            Poti incepe prin personalizarea cardului de afisare.
        </Layout>
    )
}