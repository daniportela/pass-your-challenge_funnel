// Components
import { motion, useInView, useAnimation } from "framer-motion"

// Hooks
import { useEffect, useRef } from "react"

export default function AnimationWrapper({ children, direction }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            variants={{
                hiddenRight: {opacity: 0, x: -75},
                hiddenLeft: {opacity: 0, x: 75},
                hiddenUp: {opacity: 0, y: -75},
                visible: {opacity: 1, x: 0, y: 0},
            }}
            initial={
                direction === "right" ? "hiddenRight"
                : direction === "left" ? "hiddenLeft"
                : direction === "up" ? "hiddenUp"
                : null
            }
            animate={mainControls}
            transition={{duration: .5 }}
        >
            { children }
        </motion.div>
    )
}