import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { HiDownload } from "react-icons/hi"

const Hero = () => {
  return (
    <div className="background-wrapper pb-20 pt-36">
          <div className="spotlight-wrapper">
              <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
              <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
              <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
              
          </div>
          {/* The grid background */}
              <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
                {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
          <div className="flex justify-center relative my-20 z-20">
              <div className="max-w-[89vw md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                  <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                      Adaptability. Creativity. Devotion.
                  </h2>

                  <TextGenerateEffect
                      className='text-center text-[40px] md:text-5xl lg:text-6xl'
                      words='Transforming Creative Ideas into Practical Solutions'
                  />

                  <p className="text-center mb-4">
                      Hi, I&apos;m Jheizon Brhylle, an aspiring Fullstack Web Developer based on Pasig, Philippines.
                  </p>

                  <a href='#projects'>
                      <MagicButton
                          title="Download Resume"
                          icon={<HiDownload />}
                          position='left'
                      />
                  </a>
              </div>
          </div>
    </div>
  )
}

export default Hero