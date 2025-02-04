'use client'
import { useRef, useState } from "react"
// import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const sectionFormRef = useRef(null)
    const formRef = useRef(null)
    const divSectionRef = useRef(null)


    useGSAP(()=>{
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current   
        // const divSectionRefCurrent = divSectionRef.current   

        gsap.set(sectionFormRefCurrent, {           
            opacity: 0,
            zIndex: -1,
        })

        gsap.set(formRefCurrent, {
            y: "100%", 
            display: "none",
            zIndex: -1        
        })

        
        gsap.timeline({
            scrollTrigger: {
                trigger: formRefCurrent,
                start: "-75% 50%",
                end: "-75% top",                
                markers: true,
                scrub: true,
                // pin: true
            }
        })
        
        gsap.timeline({
            scrollTrigger: {
                trigger: formRefCurrent,
                start: "-75% 50%",
                end: "-75% top",                
                markers: true,
                scrub: true,
                // pin: true
            }
        })
        .to(formRefCurrent, {
            width: "100%",
            borderRadius: "0",
            duration: 0.1
        })        
    })

    const handleShowForm = () => {
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current

        gsap.to(divSectionRef.current, {
            position: "fixed",            
            ease: "power4.out",
        })

        gsap.to(sectionFormRefCurrent, {
            opacity: 1,
            duration: 1,
            zIndex: 0,
            ease: "power4.out",
        })
        

        gsap.to(formRefCurrent, {
            display: "flex",
            y: '25%',
            borderRadius: "20px 20px 0 0",
            duration: 0.5,
            zIndex: 1,
            ease: "power2.out",
        })        
    }

    const handleCloseForm = () => {
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current

        gsap.to(divSectionRef.current, {
            position: "relative",                   
            ease: "power4.out",
        })
       
        gsap.to(sectionFormRefCurrent, {
            opacity: 0,
            duration: 2,
            zIndex: -1,
            ease: "power4.out"
        })

        gsap.to(formRefCurrent, {
            y: "100%",
            duration: 0.1,
            zIndex: -1,
            ease: "power4.out",

            onComplete: () => {
                // Ocultar el formulario después de la animación
                
                gsap.set(formRefCurrent, {
                    display: "none",
                },'>')
              
            },
        })

       
    }

    return (
        <>
            <div 
                ref={divSectionRef}
                className="relative w-full min-h-screen bg-black"
            >
                <main>
                    <section className="flex flex-col items-center justify-center w-full h-screen">
                        <h1>Contacto hero</h1>
                        <button onClick={handleShowForm}>Empezar con el formulario</button>
                    </section>
                    
                </main>
                <footer>
                    <ol>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ol>
                </footer>
            </div>   
            <section 
                        ref={sectionFormRef}
                        className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen bg-[#FFFFFF20]"
                    >            
                        <div 
                            ref={formRef}
                            className="flex items-center justify-center w-[95%] h-[200vh] bg-white text-black"
                        >
                            <div 
                                className="absolute top-4 right-4 font-bold text-5xl cursor-pointer"
                                onClick={handleCloseForm} 
                            > 
                                X 
                            </div>
                            Fromulario
                        </div>
                    </section>
        </>
    )
}
