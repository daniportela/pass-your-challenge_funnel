"use client"

// Components
import { ArrowCircleDownRounded } from "@mui/icons-material"
import { Progress, Benefits, Financing, Warranty, Testimonials, Calendar, Button, AnimationWrapper } from "./components"

// Data
import { cards } from "./data"

export default function Home() {
    return (
        <>
            <main className="d-grid grid-cols-1 items-center line-1 max-width">
                <AnimationWrapper direction="up">
                    <section>
                        <span className="fs-400 fw-300 text-blue text-uppercase d-block">Eleva el nivel de tus inversiones</span>
                        <h1 className="fs-900 fw-900">¡Aprueba el exámen y accede a tu cuenta financiada!</h1>
                        <Button text="Únete ahora" className="main-button fs-400 fw-800 d-inline-block" />
                    </section>
                </AnimationWrapper>
               
                <AnimationWrapper direction="up">
                    <iframe height="500" src="https://www.youtube.com/embed/RWWFIgAHg4w?si=BKc9YHN6Ia5jBTGI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </AnimationWrapper>     

                <div className="summary d-grid grid-cols-3">
                    { cards.map(card => (
                        <article key={card.id}>
                            <h2 className="fs-500">{card.title}</h2>
                            <p className="fs-400">{card.description}</p>
                        </article>
                    )) }
                </div>
            </main>

            <div className="scroll-down d-flex flex-column items-center">
                <span className="fs-500">Mira cómo lo hacemos</span>
                <ArrowCircleDownRounded sx={{ fontSize: "3rem" }} />
            </div>

            <Progress />
            <Benefits />
            <Financing />
            <Warranty />
            <Testimonials />
            <Calendar />
        </>
    )
}