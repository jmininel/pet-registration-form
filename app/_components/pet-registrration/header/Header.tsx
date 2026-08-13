import Image from "next/image";

export function Header() {
    return (
        <header className="flex justify-center items-center bg-gradient-to-r from-[#00C8B3] to-[#00a88f] h-20 md:h-24 rounded-t-xl text-white gap-3 shadow-md">
            <Image
                src="/pata-logo.png"
                alt="Biovet Logo"
                width={50}
                height={60}
                className="drop-shadow-lg h-auto"
            />
            
            <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-3xl font-bold">Biovet</span>
                <span className="text-xs md:text-sm font-light opacity-90">Clínica Veterinária</span>
            </div>
             <Image
                src="/pata-logo.png"
                alt="Biovet Logo"
                width={50}
                height={60}
                className="drop-shadow-lg h-auto"
            />
        </header>
    )
}