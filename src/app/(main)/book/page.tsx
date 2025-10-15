import BookPageBG from '@/app/Components/bookPageBG'
import Faq from '@/app/Components/Faq'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import React from 'react'

export default function Page() {
  return (
    <>
        <BookPageBG />
        <Navbar />
        <Faq />
        <Footer />
    </>
  )
}
