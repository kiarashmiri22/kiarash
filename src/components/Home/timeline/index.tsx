'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Icon } from '@iconify/react'

const steps = [
  {
    icon: 'lucide:compass',
    title: 'Planning',
    text: 'Understand the goal and map out the scope and architecture',
  },
  {
    icon: 'lucide:pen-tool',
    title: 'Design',
    text: 'Sketch the interface and system design before writing code',
  },
  {
    icon: 'lucide:code-2',
    title: 'Build',
    text: 'Develop the frontend, backend, and any hardware pieces',
  },
  {
    icon: 'lucide:rocket',
    title: 'Ship & Support',
    text: 'Deploy the product and stay around for fixes and updates',
  },
]

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-col gap-4'>
              <p className='text-white font-medium'>
                How I <span className='text-primary'>work</span>
              </p>
              <h2 className='text-white sm:text-5xl text-3xl font-medium lg:w-80% mx-auto mb-20'>
                A straightforward process from idea to shipped product
              </h2>
            </div>
          </motion.div>
          <div ref={ref} className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className='flex flex-col items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-8'
              >
                <div className='bg-primary/15 p-5 rounded-full'>
                  <Icon icon={item.icon} width={36} height={36} className="text-primary" />
                </div>
                <div className='text-center'>
                  <h4 className='text-2xl text-muted mb-2'>{item.title}</h4>
                  <p className='text-muted/60 text-base'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
