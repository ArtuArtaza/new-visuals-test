import { Flex, Heading, Text, Link } from "@chakra-ui/react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
const Second = () => {
    return (
        <Flex p={{ base: 5, md: 20 }} textAlign="center" minHeight="100vh" alignItems="center" justifyContent="center" maxWidth="100%" bg="#111" as={motion.section} flexDir="column" color="white" >
            <Heading mb={2} lineHeight="1" fontSize={{ base: "3rem", md: "5rem" }} as="h2">
                And then there was Pro.
            </Heading>
            <Text color="#aaa" lineHeight="1.2" fontSize={{ base: "1.4rem", md: "1.7rem" }} as="p" fontWeight="600">
                A transformative triple‑camera system that adds tons of capability
                without complexity.
                An unprecedented leap in battery life.
                And a mind‑blowing chip that doubles down on machine
                learning and pushes the boundaries of what a smartphone can do.
                Welcome to the first iPhone powerful enough to be called Pro.
            </Text>
            <Text whiteSpace="normal" textAlign="left" mt={3} color="#aaa" lineHeight="1.2" fontSize="1.4rem" fontWeight="bold" as="p">
                From
                $24.95/mo.
                or
                <Text as="span" whiteSpace="nowrap">
                    $599 with trade-in.*
                </Text>
            </Text>
            <Flex mt={10} flexDir={{ base: "column", md: "row" }} gap={2} lineHeight="1.2" fontSize="1.4rem" fontWeight="bold">
                <Link>
                    Watch the keynote
                </Link>
                <Link>
                    Watch the film
                </Link>
            </Flex>
        </Flex >
    )
}

export default Second