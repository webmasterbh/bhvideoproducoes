import React from 'react'
import Image from 'next/image'
import video_corporativo from '/public/images/vídeos-corporativos-bhvideo.jpg'
import video_eventos from '/public/images/vídeos-eventos-bhvideo.jpg'
import vídeos_publicitários from '/public/images/vídeos-publicitários-bhvideo.jpg'
import vídeos_criativos from '/public/images/vídeos-criativos-bhvideo.jpg'

function Content() {
  return (
    <section className="text-stone-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-stone-900 dark:text-stone-100">Nossos Serviços</h1>
        
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-stone-900 dark:text-stone-100">Procurando uma maneira cativante de contar sua história ou promover seu negócio? Nós somos especialistas em produção de vídeos que realmente impressionam! De vídeos corporativos a produções criativas, estamos aqui para transformar sua visão em realidade.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-stone-100 p-6 rounded-lg">
          
          <Image src={video_corporativo} width={720} height={400} alt='video corporativo' className="h-40 rounded w-full object-cover object-center mb-6" /> 
           
          <h2 className="text-lg text-stone-900 font-medium title-font mb-4">Vídeos Corporativos</h2>
          <p className="leading-relaxed text-base">
            Vídeos institucionais<br />
            Vídeos de treinamento<br />
            Vídeos promocionais<br />
            Entrevistas e depoimentos
            </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-stone-100 p-6 rounded-lg">
          
          <Image src={video_eventos} width={720} height={400} alt='video corporativo' className="h-40 rounded w-full object-cover object-center mb-6" />
           
          <h2 className="text-lg text-stone-900 font-medium title-font mb-4">Vídeos de Eventos</h2>
          <p className="leading-relaxed text-base">
Casamentos<br />
Eventos corporativos<br />
Documentários de eventos<br />
Festas e celebrações especiais</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-stone-100 p-6 rounded-lg">
         
          <Image src={vídeos_publicitários} width={720} height={400} alt='video corporativo' className="h-40 rounded w-full object-cover object-center mb-6" />
           
          <h2 className="text-lg text-stone-900 font-medium title-font mb-4">Vídeos Publicitários</h2>
          <p className="leading-relaxed text-base">
          Vídeos explicativo<br />
Vídeos de produtos<br />
Campanhas publicitárias<br />
Anúncios para TV e internet</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-stone-100 p-6 rounded-lg">
          
           <Image src={vídeos_criativos} width={720} height={400} alt='video corporativo' className="h-40 rounded w-full object-cover object-center mb-6" />
          <h2 className="text-lg text-stone-900 font-medium title-font mb-4">Vídeos Criativos</h2>
          <p className="leading-relaxed text-base">
          Vídeo aulas<br />
          Vídeos animados<br />
          Transmissão contínua<br />
          Vídeos de curta-metragem
          
</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Content