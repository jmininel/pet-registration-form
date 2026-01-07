import Image from "next/image";

export function Header() {
    return (
        <header className=" flex justify-center items-center bg-[#00C8B3] h-20 rounded-t-xl text-2xl font-semibold gap-2">
            <Image
                src="/logo.png"
                alt="imagem do logo"
                width={50}
                height={50} />
            <span>Biovet</span>
        </header>
    )
}