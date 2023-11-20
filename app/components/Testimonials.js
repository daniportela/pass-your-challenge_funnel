// Components
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image"

const cards = [
    {
        id: 1,
        picUrl: "/user_1.jpg",
        name: "Franco Ledezma",
        origin: "Argentina",
        text: "Mi experiencia con Trading Bross ha sido excepcional. Gracias a su servicio, logré obtener financiamiento en una cuenta real, un objetivo que había buscado durante mucho tiempo. Su habilidad para brindarme la confianza necesaria, presentarme resultados tangibles y, lo más destacado, su velocidad récord en la aprobación, me dejó impresionado. A diferencia de otras señales que requieren seguimiento durante horas, sus señales son eficientes, con operaciones que duran entre 15 y 20 minutos, ofreciendo resultados efectivos en poco tiempo. Estoy enormemente agradecido por su apoyo continuo en mi aprendizaje y por su contribución en mi éxito financiero."
    },
    {
        id: 2,
        picUrl: "/user_2.jpg",
        name: "Fran Olivera",
        origin: "Argentina",
        text: "Gracias a los servicios de Trading Bross, logré asegurar mi fondeo de manera eficiente, minimizando el estrés y evitando pérdidas de tiempo y dinero. A pesar de un pequeño inconveniente inicial con la cuenta, las garantías continúan vigentes meses después. Durante el período en el que gestionaron mi cuenta, demostraron una excelente gestión, limitando las pérdidas al mínimo y manteniendo un bajo porcentaje de pérdida cuando ocurrieron. Recomiendo sus servicios sin reservas, han sido excepcionales en todos los aspectos."
    },
    {
        id: 3,
        picUrl: "/user_3.jpg",
        name: "Agustín Bernal",
        origin: "Argentina",
        text: "Mi experiencia con Trading Bross ha sido transformadora. En semanas logré un crecimiento que no había alcanzado en años. La comunidad es un ambiente comprometido, siempre proyectando y compartiendo información valiosa. El equipo brinda un apoyo excepcional, con sesiones informativas y una transmisión constante de conocimientos. Estoy sumamente satisfecho con el servicio y la comunidad en su totalidad."
    },
    {
        id: 4,
        picUrl: "/user_4.jpg",
        name: "David Pascual",
        origin: "España",
        text: "Estoy profundamente agradecido por la experiencia brindada por Trading Bross. Antes de conocerlos, mi confianza en los sistemas de trading era mínima. Sin embargo, su enfoque cercano y el apoyo brindado desde la presentación inicial hasta la gestión de la cuenta fueron excepcionales. Obtuvimos resultados notables, pero lo más destacado no fue solo el éxito financiero, sino el trato personalizado y el servicio de acompañamiento. Esta experiencia no solo ha mejorado mis resultados financieros, sino que también ha sido una lección de humildad y crecimiento personal. Estoy feliz y agradecido por haber encontrado un equipo tan excepcional en este viaje financiero."
    },
    {
        id: 5,
        picUrl: "/user_6.jpg",
        name: "Valerie",
        origin: "Ecuador",
        text: "Mi experiencia con Trading Bross ha sido excepcional. El proceso de activación de mi cuenta en Nova fue rápido y eficiente, con un manejo seguro y confidencial de todas mis credenciales. El sistema de gestión de señales fue sumamente comprensible, incluso para alguien sin experiencia previa. El servicio y la atención al cliente proporcionados por Trading Bross fueron excelentes y me permitieron comenzar a operar de manera efectiva."
    },
    {
        id: 6,
        picUrl: "/user_5.jpg",
        name: "Facundo Arel",
        origin: "Argentina",
        text: "Gracias a Trading Bross, he obtenido la libertad para dedicarme al estudio del trading. Su enfoque en cuentas de fondeo y gestión me ha permitido comprender a fondo los porcentajes, lotajes y la elaboración de un plan de trading sólido. Observar a traders experimentados ha enriquecido mi comprensión sobre el manejo efectivo de cuentas y estrategias."
    }
]

export default function Testimonials() {
    return (
        <section className="testimonials d-grid grid-cols-1 max-width">
            <div>
                <span className="fs-400 fw-300 text-blue text-center text-uppercase d-block">Resultados que hablan por sí solos</span>
                <h3 className="fs-700 text-center">Nuestras historias de éxito</h3>
            </div>

            <ResponsiveMasonry>
                <Masonry gutter="2rem">
                { cards.map(card => (
                    <article key={card.id} className="testimonial-card d-flex flex-column">
                        <div className="author d-flex items-center">
                            <Image src={card.picUrl} width={60} height={60} alt={card.name} objectFit="cover" style={{ borderRadius: "50%" }} />
                            <div className="author-info">
                                <h4 className="fs-400">{card.name}</h4>
                                <span className="fs-300">{card.origin}</span>
                            </div>
                        </div>
                        <p className="fs-300">{card.text}</p>
                    </article>
                )) }
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}