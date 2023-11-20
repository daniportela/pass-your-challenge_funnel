import Image from "next/image";
import Button from "./Button";

export default function NavBar() {
    return (
        <header className="d-flex space-between items-center">
            <Image width="70" height="70" src="/logo.svg" alt="TradingBross logo" />
            <Button text="Únete ahora" className="main-button fs-300 fw-800" />
        </header>
    )
}