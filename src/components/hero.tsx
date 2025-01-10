import React from 'react'
import Image from 'next/image'
import home_bhvideo from '/public/images/home-bhvideo.jpeg'

function Hero() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-18 items-center justify-center flex-col">
    <Image
    src={home_bhvideo}
    width={720}
    height={600}
    alt='bhvieo'
    />
    <br />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-stone-900 dark:text-stone-100">Movimento e Criatividade em Ação</h1>
      <p className="mb-8 leading-relaxed  text-stone-900 dark:text-stone-100">
       <br />
       Seja bem vindo ao epicentro da criatividade visual! Somos apaixonados por capturar momentos extraordinários e transformá-los em obras-primas visuais que irão encantar seus sentidos e contar a sua história de maneira única.
        </p>

        {/*botoes*/}
        
      {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>
</section>
  )
}

export default Hero