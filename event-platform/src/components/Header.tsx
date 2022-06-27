import { Logo } from "./Logo";
import { CaretDown } from "phosphor-react";

export function Header() {
    function handleAsideMenu() {
        window.document.getElementById("sidebar")?.classList.toggle("hidden")
        window.document.getElementById("hide")?.classList.toggle("hidden")
        window.document.getElementById("seta")?.classList.toggle("-rotate-90")
        window.document.getElementById("seta")?.classList.add("transition")
        window.document.getElementById("seta")?.classList.add("duration-500")
    }

    return (
        <header className="w-full py-5 flex items-center justify-evenly bg-gray-700 border-b border-gray-600">
            <Logo />

            <a id="seta" onClick={handleAsideMenu} className="md:hidden">
                <CaretDown size={24} />
            </a>
        </header>
    )
}