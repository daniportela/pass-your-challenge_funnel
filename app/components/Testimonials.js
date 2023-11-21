// Components
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image"

// Data
import { testimonials } from "../data"
import AnimationWrapper from "./AnimationWrapper"

export default function Testimonials() {
    return (
        <section className="testimonials d-grid grid-cols-1 max-width">
            <AnimationWrapper direction="right">
                <span className="fs-400 fw-300 text-blue text-center text-uppercase d-block">Resultados que hablan por sí solos</span>
                <h3 className="fs-700 text-center">Nuestras historias de éxito</h3>
            </AnimationWrapper>

            <AnimationWrapper direction="up">
                <ResponsiveMasonry>
                    <Masonry gutter="2rem">
                    { testimonials.map(testimonial => (
                        <article key={testimonial.id} className="testimonial-card d-flex flex-column">
                            <div className="author d-flex items-center">
                                <Image src={testimonial.picUrl} width={60} height={60} alt={testimonial.name} style={{ borderRadius: "50%" }} />
                                <div className="author-info">
                                    <h4 className="fs-400">{testimonial.name}</h4>
                                    <span className="fs-300">{testimonial.origin}</span>
                                </div>
                            </div>
                            <p className="fs-300">{testimonial.text}</p>
                        </article>
                    )) }
                    </Masonry>
                </ResponsiveMasonry>
            </AnimationWrapper>
        </section>
    )
}