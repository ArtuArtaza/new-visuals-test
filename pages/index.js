import { Button, Flex, Heading, Box, Image, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import Fourth from "../components/Fourth/Fourth";
import Hero from "../components/Hero/Hero";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Second from "../components/Second/Second";
import Third from "../components/Third/Third";
import Fifth from "../components/Fifth/Fifth";
import Six from "../components/Six/Six";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const isVisible = useBreakpointValue({ base: "none", lg: "block" });
  const variant = useBreakpointValue({ base: -800, md: -1200 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 10], [50, variant]);
  const yWithSpring = useSpring(y, {
    stiffness: 50,
    damping: 50,
    bounce: 0,
  });
  return (
    <Flex minHeight="100vh" bgColor="#111" flexDir="column">
      <NavigationBar />
      <Flex
        p={3}
        alignItems="center"
        position="sticky"
        top="0"
        zIndex={99}
        justifyContent="space-between"
        bg="#111"
      >
        <Heading as="h4" fontSize="1.3rem">
          iPhone 11 Pro
        </Heading>
        <Box>
          <Text
            display={isVisible}
            mr={1}
            fontSize=".8rem"
            as="span"
            color="#aaa"
          >
            Overview
          </Text>
          <Text display={isVisible} mr={5} fontSize=".8rem" as="span">
            Tech Specs
          </Text>
          <Button
            borderRadius="1rem"
            fontSize=".8rem"
            height={"1.5rem"}
            width={"2rem"}
            color="white"
            bg="#1680eb"
          >
            Buy
          </Button>
        </Box>
      </Flex>
      <Hero />
      <Box
        zIndex={1}
        as={motion.div}
        style={{
          y: yWithSpring,
          transition: "all .1ms ease-in-out",
        }}
      >
        <Second />
        <Third />
        <Fourth />
      </Box>
      <Fifth />
    </Flex>
  );
}
