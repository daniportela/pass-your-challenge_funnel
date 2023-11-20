"use client"

import { InlineWidget } from "react-calendly"

export default function Calendar() {
    return (
        <section id="book-call" className="book-call d-grid grid-cols-1 max-width">
            <span className="fs-400 fw-300 text-center text-blue text-uppercase d-block">¿Te queda alguna duda?</span>
            <h1 className="fs-700 fw-800 text-center">Nuestro equipo está listo para ayudarte</h1>
            <p className="fs-400 text-center">
                <strong>¿Listo para desbloquear tu potencial financiero?</strong> Agenda una reunión con nuestros especialistas en inversiones.
                Estamos ansiosos por trabajar contigo y proporcionarte las herramientas y estrategias necesarias para alcanzar
                tus objetivos financieros.
            </p>


            <InlineWidget
                url="https://calendly.com/daaniiportela/30min"
                pageSettings={{ backgroundColor: "202020", primaryColor: "70C8F2", textColor: "FFFFFF" }}
                styles={{ height: "700px" }}
            />
        </section>
    )
}