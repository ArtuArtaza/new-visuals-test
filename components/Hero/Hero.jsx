import { Box, Flex, Image } from "@chakra-ui/react"
import { motion, useTransform, useScroll } from "framer-motion"
import { useEffect } from "react"
const Hero = () => {
    return (
        <Flex minHeight="100vh" transition="all .2s ease-in" as={motion.div} p={3} justifyContent="center">
            <Image mt={20} src="./assets/cellphone.png" alt="iphonePhoto" width="50%" height="50%" />
        </Flex>
    )
}

export default Hero

