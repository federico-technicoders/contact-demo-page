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


    useGSAP(()=>{
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current      

        gsap.set(sectionFormRefCurrent, {
            // y: "100%", // Fuera de la pantalla
            // display: "none"
            opacity: 0,
            zIndex: -1,
        })

        gsap.set(formRefCurrent, {
            y: "100%", // Fuera de la pantalla
            display: "none",
            zIndex: -1        
        })

        // Animar el formulario para cuando realice scroll se ensanche y cuando vuelca a su posición original se encoja
        ScrollTrigger.create({
            trigger: formRefCurrent,
            start: "-75% 50%",
            end: "-75% top",
            markers: true,
            onEnter: () => {
                gsap.to(formRefCurrent, {
                    width: "100%",
                    // duration: 1,
                    // ease: "power4.out",
                })
            },
            onLeaveBack: () => {
                gsap.to(formRefCurrent, {
                    width: "95%",
                    // duration: 1,
                    // ease: "power4.out",
                })
            },
        })
        
        
        

      


        
    })

    const disableScroll = () => {
        document.body.style.overflow = "hidden"
    }

    const enableScroll = () => {
        document.body.style.overflow = "auto"
    }

    const handleShowForm = () => {
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current

        // disableScroll()

        // Aseguramos que sea visible antes de la animación
        // gsap.set(sectionFormRefCurrent, {
        //     display: "flex",

        // })

        // Animar el formulario deslizándose hacia arriba
        gsap.to(sectionFormRefCurrent, {
            opacity: 1,
            duration: 2,
            zIndex: 0,
            ease: "power4.out",
        })

        gsap.to(formRefCurrent, {
            display: "flex",
            y: '25%',
            borderRadius: "20px 20px 0 0",
            duration: 2,
            zIndex: 1,
            ease: "power4.out",
        })

        
    }

    const handleCloseForm = () => {
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current
        // disableScroll()

        // // Animar el formulario deslizándose hacia abajo
        // gsap.to(sectionFormRefCurrent, {
        //     y: "100%",
        //     duration: 1,
        //     ease: "power4.out",

        //     onComplete: () => {
        //         // Ocultar el formulario después de la animación
        //         gsap.set(sectionFormRefCurrent, {
        //             display: "none",
        //         })
        //         enableScroll()
        //     },
        // })
        // Animar el formulario deslizándose hacia abajo
        gsap.to(sectionFormRefCurrent, {
            opacity: 0,
            duration: 2,
            zIndex: -1,
            ease: "power4.out",

            // onComplete: () => {
            //     // Ocultar el formulario después de la animación
            //     gsap.set(sectionFormRefCurrent, {
            //         display: "none",
            //     })
            //     enableScroll()
            // },
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
                // enableScroll()
            },
        })

       
    }

    return (
        <div>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-screen">
                    <h1>Contacto hero</h1>
                    <button onClick={handleShowForm}>Empezar con el formulario</button>
                </section>
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
            </main>
            <footer>
                <ol>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ol>
            </footer>
        </div>   
    )
}
