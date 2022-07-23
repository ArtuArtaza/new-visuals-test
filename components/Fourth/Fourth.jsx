import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react"
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
const Fourth = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1200], [-500, 0]);
    const opacity = useTransform(scrollY, [0, 1600], [0, 1])
    const yWithSpring = useSpring(y, {
        stiffness: 300,
        damping: 50,

    });
    return (
        <Flex px={3} bg="#111" as={motion.div} position="relative" zIndex={3} style={{
            y: yWithSpring,
            transition: "all 1ms ease-in-out"
        }} flexDir={{ base: "column", lg: "row-reverse" }}>
            <Image style={{ opacity: opacity, }} pt={2} objectFit="cover" src="./assets/cellphoneback.jpg" width={{ base: "200%", lg: "100%" }} alt="camera-img" />
            <Box style={{ opacity: opacity, }} px={10}>
                <Heading maxWidth={{ base: "15rem", lg: "21rem" }} fontWeight="600" mt="5rem" fontSize={{ base: "2.5rem", lg: "4.5rem" }} as="h2">
                    Take a closer look.
                </Heading>
                <Text pb={10} color="#aaa" lineHeight="1.2" fontSize={{ base: "1.18rem", lg: "1.5rem" }} as="p" fontWeight="600">
                    Two sizes. Four finishes. Stainless steel and glass design.
                </Text>
            </Box>
        </Flex>
    )
}
export default Fourth