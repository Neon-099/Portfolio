import {motion} from 'framer-motion'

import {styles} from '../styles';
import { staggerContainer } from '../utils/motion';

                                //ID: used to navigate on a specific section
export const SectionWrapper = (Components, idName) => {
    return function HOC() {
        return (
            <motion.section
                variants={staggerContainer()} //ANIMATE OUR SECTION
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} // show once only
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                {/*TO MAKE IT AUTO SCROLL*/}
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Components />
            </motion.section>
        )
    }
}