'use client'
import { useRef, useState } from "react"
// import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
    Button, 
    HeroUIProvider, 
    Modal, 
    ModalBody, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    useDisclosure 
} from "@heroui/react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure()
    const sectionFormRef = useRef(null)
    const formRef = useRef(null)
    // const divSectionRef = useRef(null)


    useGSAP(()=>{
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current   
        // const divSectionRefCurrent = divSectionRef.current   

        gsap.set(sectionFormRefCurrent, {   
            visibility: "none",        
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

    // const handleShowForm = () => {
    //     const sectionFormRefCurrent = sectionFormRef.current
    //     const formRefCurrent = formRef.current

    //     // Deshabilitar el scroll en el body
    //     // document.body.classList.add("overflow-hidden");
    //     // sectionFormRefCurrent.classList.add("overflow-scroll");

    //     gsap.to(sectionFormRefCurrent, {
    //         visibility: "visible",
    //         opacity: 1,
    //         duration: 1,
    //         zIndex: 0,
    //         ease: "power4.out",
    //     })

    //     gsap.to(formRefCurrent, {
    //         display: "flex",
    //         y: '25%',
    //         borderRadius: "20px 20px 0 0",
    //         duration: 0.5,
    //         zIndex: 1,
    //         ease: "power2.out",
    //     })        
    // }

    // const handleCloseForm = () => {
    //     const sectionFormRefCurrent = sectionFormRef.current
    //     const formRefCurrent = formRef.current
       
    //     gsap.to(sectionFormRefCurrent, {
    //         opacity: 0,
    //         duration: 2,
    //         zIndex: -1,
    //         ease: "power4.out"
    //     })

    //     gsap.to(formRefCurrent, {
    //         y: "100%",
    //         duration: 0.1,
    //         zIndex: -1,
    //         ease: "power4.out",

    //         onComplete: () => {
    //             // Ocultar el formulario después de la animación
    //             gsap.set(formRefCurrent, {
    //                 display: "none",
    //             },'>')
              
    //         },
    //     })

       
    // }

    return (
        <HeroUIProvider>
            <div 
                // ref={divSectionRef}
                className="absolute top-0 left-0 w-full min-h-screen"
                // className="w-full min-h-screen"
            >
                <main>
                    <section className="flex flex-col items-center justify-center w-full h-screen">
                        <h1>Contacto hero</h1>
                        <Button
                            className="mt-4 border-2 border-white py-4 px-2 rounded-xl"
                            onPress={onOpen}
                        >
                            Empezar con el formulario
                        </Button>
                        {/* <button 
                            // onClick={handleShowForm}
                        >
                            Empezar con el formulario
                        </button> */}
                    </section>
                    <Modal
                        // className={{
                        //     content: "w-[95%] h-[200vh] bg-white text-black",
                        //     header: "flex flex-col gap-1",
                        //     body: "",
                        //     footer: "",
                        // }}
                        className="abolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[95%] h-[200vh] "
                        radius="lg"
                        backdrop="opaque"
                        isOpen={isOpen}
                        motionProps={{
                            variants: {
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                    },
                                },
                                exit: {
                                    y: -20,
                                    opacity: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                    },
                                },
                            },
                        }}
                        onOpenChange={onOpenChange}
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                            quam.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                            quam.
                                        </p>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                            officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                            nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                            deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </main>
                <footer>
                    <ol>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ol>
                </footer>
            </div>   
            {/* <section 
                ref={sectionFormRef}
                className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen bg-[#FFFFFF60]"
            >            
                <div 
                    ref={formRef}
                    className="flex items-center justify-center w-[95%] h-[200vh] bg-white text-black"
                >
                    <div 
                        className="absolute top-4 right-4 font-bold text-5xl cursor-pointer"
                        // onClick={handleCloseForm} 
                    > 
                        X 
                    </div>
                    Fromulario
                </div>
            </section> */}
           
        </HeroUIProvider>
    )
}
