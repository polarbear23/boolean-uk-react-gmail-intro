import React from 'react'
import '../styles/mainnav.css'

import MainNav from './main_nav.js'
import EmailContent from './email_content.js'
const Main = () => {
    return (
        <main className="email-view">
            <MainNav />
            <EmailContent />
        </main>
    )
}

export default Main
