'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Icon } from '@iconify/react'
import CodeWindow from '../CodeWindow'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      icon: 'lucide:layout-panel-left',
      text: 'End-to-end product builds, frontend to backend',
    },
    {
      icon: 'lucide:cpu',
      text: 'Comfortable working with hardware and embedded systems',
    },
    {
      icon: 'lucide:file-code-2',
      text: 'Clean, documented, and maintainable code',
    },
    {
      icon: 'lucide:zap',
      text: 'Fast turnaround without cutting corners',
    },
  ]

  return (
    <section className='' id='work'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          <motion.div
            {...bottomAnimation}
            className='lg:col-span-7 col-span-12'>
            <div className='flex flex-col gap-3'>
              <p className="text-white font-medium">
                Why work <span className='text-primary'>with me</span>
              </p>
              <h2 className='sm:text-5xl text-3xl text-white lg:w-full md:w-70% font-medium'>
                Full-stack skills, from pixels to hardware
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-7 mt-11'>
              {services.map((service, index) => (
                <div key={index} className='flex items-center gap-5'>
                  <div className='p-3 bg-primary/15 rounded-full'>
                    <Icon icon={service.icon} width={25} height={25} className="text-primary" />
                  </div>
                  <p className='text-white font-medium'>{service.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className='lg:col-span-5 col-span-12'>
            <div className='2xl:-mr-10 mt-9 flex justify-center'>
              <CodeWindow filename="about-me.ts">
                <div className="text-white/80">
                  <span className="text-primary">const</span> developer = {'{'}
                </div>
                <div className="pl-4 text-white/80">
                  name: <span className="text-[#ce9178]">&apos;Kiarash Miri&apos;</span>,
                </div>
                <div className="pl-4 text-white/80">
                  role: <span className="text-[#ce9178]">&apos;Full-Stack Developer&apos;</span>,
                </div>
                <div className="pl-4 text-white/80">
                  stack: [<span className="text-[#ce9178]">&apos;React&apos;</span>, <span className="text-[#ce9178]">&apos;Next.js&apos;</span>, <span className="text-[#ce9178]">&apos;Node&apos;</span>, <span className="text-[#ce9178]">&apos;Python&apos;</span>],
                </div>
                <div className="pl-4 text-white/80">
                  alsoLoves: <span className="text-[#ce9178]">&apos;hardware &amp; embedded&apos;</span>,
                </div>
                <div className="text-white/80">{'}'}</div>
              </CodeWindow>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
