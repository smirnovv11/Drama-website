import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation} from "framer-motion"

const AnimatedDiv = (props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visable")
        }
    }, [isInView])

    return (
        <div ref={ref} style={props.style}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 60 },
                visable: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: props.duration, delay: 0.1}}
            >

                {props.children}

            </motion.div>
        </div>
    )
}

export default AnimatedDiv