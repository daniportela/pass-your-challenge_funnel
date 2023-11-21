import Image from "next/image"

export default function Benefits() {
    return (
        <section className="benefits d-grid grid-cols-1 max-width">
            <div className="separator"></div>
            <span className="fs-400 fw-300 text-blue text-center text-uppercase d-block">Beneficios para siempre</span>
            <h2 className="fs-800 fw-800 text-center">Cuando completes tu registro, también obtendrás acceso ilimitado a…</h2>

            <article className="d-flex">
                <div className="content">
                    <h3 className="fs-600">Nuestro canal de señales completamente gratis</h3>
                    <p className="fs-400">
                        Únete a nuestra exclusiva comunidad y recibe acceso ilimitado a nuestras señales de inversión.
                        Obtén información privilegiada y oportunidades en tiempo real para maximizar tus inversiones, sin costo alguno.
                    </p>
                </div>
                <Image src="/seniales.jpg" width={456} height={288} alt="Señales financieras en celular y computadora" />
            </article>
            <article className="d-flex">
                <div className="content">
                    <h3 className="fs-600">Todos los recursos que se encuentran en nuestra academia de inversiones</h3>
                    <p className="fs-400">
                        Sumérgete en nuestro extenso conjunto de recursos educativos. Desde videos instructivos hasta guías detalladas
                        y seminarios en vivo, nuestra plataforma te ofrece todo lo que necesitas para perfeccionar tus habilidades de
                        inversión y alcanzar el éxito financiero.
                    </p>
                </div>
                <Image src="/resources.jpg" width={456} height={288} alt="Colección de recursos de aprendizaje" />
            </article>
        </section>
    )
}