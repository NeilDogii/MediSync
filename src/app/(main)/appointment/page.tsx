import BookPageBG from '@/components/UserComponents/bookPageBG'
import Faq from '@/components/UserComponents/Faq'
import Footer from '@/components/UserComponents/Footer'
import Navbar from '@/components/UserComponents/Navbar'
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
