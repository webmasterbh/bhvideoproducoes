import React from 'react'
import Contactform from './form'


function Contact() {
  return (
    <section className="text-stone-600 body-font relative">
  <div className="container px-5 py-18 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-stone-900 dark:text-stone-100">Contato</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-stone-100" >Se você está em busca de soluções audiovisuais de alta qualidade, a BH Vídeo Produções está aqui para atender às suas necessidades. Entre em contato conosco hoje mesmo para discutir seu próximo projeto.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <Contactform />
        <div className="p-2 w-full pt-8 mt-8 border-t border-stone-200 text-center">
        
          <p className="leading-normal my-5 text-stone-900 dark:text-stone-100">
            <br />Belo Horizonte / MG<br />  31 99657-2979<br />
            31 2551-7044 
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact