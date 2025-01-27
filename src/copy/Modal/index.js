'use client'
import { useRef, useState } from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useDraggable,
  ModalProps
} from "@heroui/react"

export function ModalComponent() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState("outside")

  // const targetRef = useRef(null);
  // const {moveProps} = useDraggable({targetRef, canOverflow: true, isDisabled: !isOpen});

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal 
        // ref={targetRef} 
        isOpen={isOpen} 
        scrollBehavior={scrollBehavior}
        placement="bottom"
        size="5xl"
        
        backdrop="opaque"
        onOpenChange={onOpenChange}
        // motionProps={{
        //   variants: {
        //     enter: {
        //       y: 0,
        //       opacity: 1,
        //       transition: {
        //         duration: 0.3,
        //         ease: "easeIn",
        //       },
        //     },
        //     exit: {
        //       y: -20,
        //       opacity: 0,
        //       transition: {
        //         duration: 0.2,
        //         ease: "easeIn",
        //       },
        //     },
        //   },
        // }}
        className="bg-white rounded-2xl text-black"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader 
                // {...moveProps} 
                className="flex flex-col gap-1"
              >
                Modal Title
              </ModalHeader>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis
                  sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                  incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                  et. Culpa deserunt nostrud ad veniam.
                </p>
                <p>
                  Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                  eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                  consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                  hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute
                  tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
                  pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
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
                <p>
                  Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                  eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                  consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                  hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute
                  tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
                  pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
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
    </section>
  );
}

