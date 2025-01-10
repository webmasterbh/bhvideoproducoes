import React from 'react'
import Image from 'next/image'
import edicao_bhvideo from '/public/images/edicao-bhvideo.jpg'
import equimamento_bhvideo from '/public/images/equimamento-bhvideo.jpg'
import reuniao_bhvideo from '/public/images/reuniao-bhvideo.jpg'
import evento_bhvideo from '/public/images/evento-bhvideo.jpg'
import estudio_bhvieo from '/public/images/estudio-bhvieo.jpg'
import camera_bhvideo from '/public/images/camera-bhvideo.jpg'

function Galery() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-18 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-stone-900 dark:text-stone-100 lg:w-1/3 lg:mb-0 mb-4">Nossa Filosofia</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-stone-900 dark:text-stone-100">Nossa filosofia é desafiar as convenções e buscar a criatividade em cada fotograma e clique. Acreditamos que a magia acontece quando a visão se encontra com a lente, e nossa equipe está empenhada em transformar suas ideias em obras de arte visuais.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
       
          <Image src={reuniao_bhvideo} width={500} height={300} alt='Reunião Bh vídeo' />
        </div>
        <div className="md:p-2 p-1 w-1/2">
         
          <Image src={evento_bhvideo} width={500} height={300} alt='Evento Bh vídeo' />
        </div>
        <div className="md:p-2 p-1 w-full">
        
          <Image src={edicao_bhvideo} width={800} height={360} alt='Edição Bh vídeo' />
          
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
         
          <Image src={equimamento_bhvideo} width={800} height={360} alt='Equipamento Bhvídeo' />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          
          <Image src={ estudio_bhvieo } width={500} height={300} alt='Estudio Bh vídeo' />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          
          <Image src={camera_bhvideo} width={500} height={300} alt='CameraMen Bhvídeo' />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Galery