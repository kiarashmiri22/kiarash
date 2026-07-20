'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { projects } from './data'

const Portfolio = () => {
  return (
    <section className='pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: '-40px', opacity: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center max-w-2xl mx-auto mb-14'
        >
          <p className='text-white font-medium'>
            Selected <span className='text-primary'>work</span>
          </p>
          <h2 className='text-white sm:text-5xl text-3xl mt-2 font-medium'>
            Projects I&apos;ve built
          </h2>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 gap-5'
            >
              <div className='bg-primary/15 p-4 rounded-full w-fit'>
                <Icon icon={project.icon} width={28} height={28} className='text-primary' />
              </div>
              <h3 className='text-white text-xl font-medium'>{project.title}</h3>
              <p className='text-muted/60 text-base flex-1'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='text-sm text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  className='text-primary flex items-center gap-2 font-medium mt-2'
                >
                  View project
                  <Icon icon='lucide:arrow-up-right' width={18} height={18} />
                </Link>
              )}
            </motion.div>
          ))}

          <div className='flex flex-col items-center justify-center gap-3 border border-dashed border-white/15 rounded-2xl p-8 text-center min-h-[260px]'>
            <div className='bg-white/5 p-4 rounded-full'>
              <Icon icon='lucide:plus' width={24} height={24} className='text-white/40' />
            </div>
            <p className='text-muted/50 text-base'>More projects coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
