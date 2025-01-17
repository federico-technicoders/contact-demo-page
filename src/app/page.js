// import Image from "next/image";

export default function Home() {
    return (
        <div>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-screen">Contacto hero</section>
                <section className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen bg-[#FFFFFF20]">
                    {/* <h2>sección dos</h2> */}
                    <div className="flex items-center justify-center w-full h-[200vh] bg-white text-black">Fromulario</div>
                    <button>Empezar con el formulario</button>
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
