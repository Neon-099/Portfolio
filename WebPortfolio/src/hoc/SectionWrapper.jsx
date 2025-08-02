import {motion} from 'framer-motion'

import {styles} from '../styles';
import { staggerContainer } from '../utils/motion';

                                //ID: used to navigate on a specific section
export const SectionWrapper = (Components, idName) => {
    return function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Components />
            </motion.section>
        )
    }
}