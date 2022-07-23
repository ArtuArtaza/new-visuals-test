import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { useScroll, motion, useTransform } from "framer-motion";
import Seven from "../Seven/Seven";
const Six = () => {
    const { scrollY } = useScroll();
    //const y = useTransform(scrollY, [1700, 2000], [-500, -1500]);

    return (
        <Flex
            bg="#111"
            zIndex={1}
            as={motion.div}
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            overflowX="hidden"
            minHeight="100vh"
            position="relative"
            style={{
                y: 0,
            }}
        >
            <Text px={5} as="p" fontWeight="700" p={3} fontSize="1.4rem">
                Meet the first triple‑camera system to combine cutting‑edge technology
                with the legendary simplicity of iPhone. Capture up to four times more
                scene. Get beautiful images in drastically lower light. Shoot the
                highest‑quality video in a smartphone — then edit with the same tools
                you love for photos. You’ve never shot with anything like it.
            </Text>
            <Box
                ml="4rem"
                as={motion.div}
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="start"
                bgRepeat="no-repeat"
                position="sticky"
                right={0}
                mt={10}
                bgImg="./assets/iphonewhite.jpg"
                width="100%"
                border="1px solid red"
                height="50vh"
                bgSize="580px"
                bgPos="0 0"
            >
                <Box
                    display="flex"
                    flexDir="column"
                    height="40%"
                    left="2.5rem"
                    justifyContent="start"
                    top="2rem"
                    alignItems="center"
                    position="absolute"
                    border="1px solid red"
                    width="230px"
                >
                    <Image
                        width="100%"
                        left="0"
                        position="absolute"
                        src="./assets/cellphone-lens1.png"
                        alt="camera-lens"
                    />
                    <Image
                        width="100%"
                        right="1"
                        position="absolute"
                        src="./assets/cellphone-lens2.png"
                        alt="camera-lens"
                    />
                    <Image
                        width="100%"
                        left="0"
                        position="absolute"
                        src="./assets/cellphone-lens3.png"
                        alt="camera-lens"
                    />
                </Box>
            </Box>
            <Seven />
        </Flex>
    );
};

export default Six;
