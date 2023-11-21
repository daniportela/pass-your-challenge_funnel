// Components
import Image from "next/image"
import { Verified } from "@mui/icons-material"
import Button from "./Button"
import AnimationWrapper from "./AnimationWrapper"

export default function Financing() {
    return (
        <AnimationWrapper direction="up">
            <section className="financing d-grid grid-cols-1 max-width">
                <div className="separator"></div>

                <article className="d-flex">
                    <Image className="center-self" width={500} height={500} src="/rocket.png" alt="Representación de un cohete" />

                    <div className="rates flex-1">
                        <div className="rates-title">
                            <span className="fs-400 fw-300 text-blue text-uppercase d-block">Gran flexibilidad</span>
                            <h3 className="fs-700">Tarifas de financiamiento</h3>
                        </div>

                        <div className="fs-300">
                            <Verified style={{ color: "#70C8F2" }} />
                            <span><strong>10k</strong>: $99 USD</span>
                        </div>
                        <div className="fs-300">
                            <Verified style={{ color: "#70C8F2" }} />
                            <span><strong>25k</strong>: $199 USD</span>
                        </div>
                        <div className="fs-300">
                            <Verified style={{ color: "#70C8F2" }} />
                            <span><strong>50k</strong>: $299 USD</span>
                        </div>
                        <div className="fs-300">
                            <Verified style={{ color: "#70C8F2" }} />
                            <span><strong>100k</strong>: $499 USD</span>
                        </div>
                        <div className="fs-300">
                            <Verified style={{ color: "#70C8F2" }} />
                            <span><strong>200k</strong>: $899 USD</span>
                        </div>
                        <div className="fs-300">
                            <Verified style={{ color: "#70C8F2" }} />
                            <span><strong>400k</strong>: $1688 USD</span>
                        </div>

                        <Button text="Obtén tu cuenta ya!" className="main-button fs-400 fw-800 text-center" />
                    </div>
                </article>
            </section>
        </AnimationWrapper>
    )
}