// Components
import Image from "next/image"
import Button from "./Button"
import { Verified } from "@mui/icons-material"

export default function Progress() {
    return (
        <>
            <section className="progress max-width">
                <div className="progress-bar"></div>

                <article className="step">
                    <Image className="center-self" src="/money.png" width={400} height={400} style={{ width: "100%", height: "auto" }} alt="moneee" />
                    <div className="track">
                        <div className="ball"></div>
                    </div>
                    <div className="fs-400 center-self">
                        <h3 className="fs-600 line-1">Multiplica tu dinero de forma segura</h3>
                        <ul role="list">
                            <li>Accede a nuestras cuentas de inversión con fondos de 25k a 400k.</li>
                            <li>Éxito 100% garantizado.</li>
                            <li>Asesoramiento de profesionales con amplia experiencia en inversiones.</li>
                        </ul>
                    </div>
                </article>

                <article className="step">
                    <Image className="center-self" src="/cuenta.png" width={400} height={400} style={{ width: "100%", height: "auto" }} alt="moneee" />
                    <div className="track">
                        <div className="ball"></div>
                    </div>
                    <div className="fs-400">
                        <h3 className="fs-600 line-1">Obtén tu cuenta en tiempo record</h3>
                        <ul role="list">
                            <li>Ejecución ultrarrápida de estrategias de inversión para maximizar tu potencial de ganancias.</li>
                            <li>Soporte personalizado para aprovechar al máximo cada oportunidad financiera.</li>
                            <li>Oportunidades de inversión diversificadas seguras para impulsar tus resultados.</li>
                        </ul>
                    </div>
                </article>
            </section>
            <Button text="Únete ahora" className="main-button fs-400 fw-800 d-block fit-content margin-inline-auto" />
        </>
    )
}