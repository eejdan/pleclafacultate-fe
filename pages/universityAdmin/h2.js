import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from './Layout'

import styles from '../../styles/UniversityAdmin.module.css'

export default function H2() {

    const panelRouter = useRouter();

    return (
        <Layout>
            HoneyBee2
        </Layout>
    )
}