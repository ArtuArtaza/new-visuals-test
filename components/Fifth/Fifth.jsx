import { Flex, Text, Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
const Fifth = () => {
    const { scrollY } = useScroll();
    const variant = useBreakpointValue({ base: -800, md: -1200 })
    const oVariant = useBreakpointValue({ base: [1500, 1600], md: [1100, 1200], })
    const y = useTransform(scrollY, [1400, 1500], [-1500, variant]);
    const yWithSpring = useSpring(y, {
        stiffness: 200,
        damping: 50,

    })
    const opacity = useTransform(scrollY, oVariant, [0, 1])
    const opacityWithSpring = useSpring(opacity, {
        stiffness: 200,
        damping: 300,
    })
    const rotationZ = useTransform(scrollY, [1400, 1500], [-20, 0]);
    //const yWithSpring = useSpring(y,)
    return (
        <Flex
            transition="all 30ms ease-in"
            overflowX="hidden"
            overflowY="hidden"
            flexDir="column"
            bg="#111"
            pr={1}
            pl={1}
            minHeight="100vh"
            position="relative"
            bgImage=""
            zIndex={0}
            as={motion.div}
            style={{
                y: yWithSpring,
                opacity: opacityWithSpring,
            }}
            justifyContent="left"
        >
            <Text
                lineHeight="1"
                textAlign="left"
                maxWidth={{ base: "15rem", lg: "30rem" }}
                pl={{ base: "0", lg: 10 }}
                fontWeight="600"
                mt="5rem"
                fontSize={{ base: "2.5rem", lg: "4.7rem" }}

            >
                <Box mb={3} as="span" color="#aaa;" display="block">
                    {"Pro camera system"}
                </Box>
                {"We’ve three‑upped ourselves."}
            </Text>
            <Flex
                flexDir="column"
                alignSelf="center"
                position="relative"
                zIndex={-1}
                width="100%"
            >
                <Box
                    width={{ base: "290px", lg: "550px" }}
                    height={{ base: "290px", lg: "550px" }}
                    as={motion.div}
                    bgImg="./assets/lens1.jpg"
                    bgPos="center"
                    bgSize={{ base: "280px", lg: "800px" }}
                    position="absolute"
                    bottom={{ base: 2, lg: 200 }}
                    left="-8rem"
                    bgRepeat="no-repeat"
                />
                <Box
                    height={{ base: "290px", lg: "555px" }}
                    width={{ base: "290px", lg: "555px" }}
                    as={motion.div}
                    bgImg="./assets/lens2.jpg"
                    bgPos="center"
                    bgSize={{ base: "280px", lg: "555px" }}
                    position="absolute"
                    bottom="-7rem"
                    right="-7rem"
                    bgRepeat="no-repeat"
                />
                <Box
                    height={{ base: "290px", lg: "500px" }}
                    width={{ base: "290px", lg: "500px" }}
                    as={motion.div}
                    bgImg="./assets/lens3.jpg"
                    bgPos="center"
                    bgSize={{ base: "280px", lg: "555px" }}
                    position="absolute"
                    top="0"
                    left="-6rem"
                    bgRepeat="no-repeat"
                />
            </Flex>
        </Flex>
    );
};
/* <Image as={motion.img} style={{
                    rotate: rotationZ,
                }} width="290px" position="absolute" bottom={5} left="-9rem" src="./assets/lens1.jpg" />
                <Image as={motion.img} width="290px" position="absolute" bottom={-20} right="-9rem" src="./assets/lens2.jpg" />
                <Image as={motion.img} width="290px" position="absolute" top={5} left="-5rem" src="./assets/lens3.jpg" /> */
export default Fifth;
