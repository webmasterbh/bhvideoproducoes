import React from 'react'
import Image from 'next/image'
import Logo from "/public/images/logo-bhvideo.jpg"

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
            src={Logo}
            alt="Logo"
            width="50"
            height="50"
            className="rounded-full cursor-pointer"
            priority
          />
      <span className="ml-3 text-xl text-stone-900 dark:text-stone-100">BH VÍDEO PRODUÇÕES</span>
    </a>
    <p className="text-sm text-stone-900 dark:text-stone-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023
      <a href="https://twitter.com/knyttneve" className="text-stone-900 dark:text-stone-100" rel="noopener noreferrer" target="_blank"></a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.facebook.com/bhvideopro" className="text-stone-900 dark:text-stone-100">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
</svg>

      </a>
   
      <a href="https://www.instagram.com/bhvideoproducoes/" className="ml-3 text-stone-900 dark:text-stone-100">
      <svg viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
</svg>
      </a>

      <a href="https://www.youtube.com/@martan20111/videos" className="ml-3 text-stone-900 dark:text-stone-100">
      <svg viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
</svg>
      </a>
      
    </span>
  </div>
</footer>
  )
}

export default Footer