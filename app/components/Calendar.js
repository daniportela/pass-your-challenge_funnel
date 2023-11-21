import { InlineWidget } from "react-calendly"
import AnimationWrapper from "./AnimationWrapper"

export default function Calendar() {
    return (
        <section id="book-call" className="book-call d-grid grid-cols-1 max-width">
            <AnimationWrapper direction="up">
                <span className="fs-400 fw-300 text-center text-blue text-uppercase d-block">¿Te queda alguna duda?</span>
                <h3 className="fs-700 fw-800 text-center">Nuestro equipo está listo para ayudarte</h3>
                <p className="fs-400 text-center">
                    <strong>¿Listo para desbloquear tu potencial financiero?</strong> Agenda una reunión con nuestros especialistas en inversiones.
                    Estamos ansiosos por trabajar contigo y proporcionarte las herramientas y estrategias necesarias para alcanzar
                    tus objetivos financieros.
                </p>
            </AnimationWrapper>

            <InlineWidget
                url="https://calendly.com/daaniiportela/30min"
                pageSettings={{ backgroundColor: "202020", primaryColor: "70C8F2", textColor: "FFFFFF" }}
                styles={{ height: "1000px", marginTop: "3rem" }}
            />
        </section>
    )
}