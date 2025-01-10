import Image from 'next/image'
import Hero from '@/components/hero'
import Content from '@/components/content'
import Feature from '@/components/feature'
import Contact from '@/components/contact'
import Galery from '@/components/galery'


export default function Home() {
  return (
    <main>
     <Hero />
     <Content />
     <Galery />
     <Feature />
     <Contact />
    </main>
  );
}
