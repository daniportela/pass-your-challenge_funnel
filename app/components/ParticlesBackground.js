import ParticlesBg from "particles-bg"

export default function ParticlesBackground() {
    return (
        <div className="particles-wrapper">
            <ParticlesBg type="cobweb" color="#8E8F8F" bg={{ position: "absolute", zIndex: -2, top: 0, left: 0 }} />
        </div>
    )
}