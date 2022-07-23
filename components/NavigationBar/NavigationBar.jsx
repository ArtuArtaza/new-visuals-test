import { Flex, Icon, Link, useBreakpointValue } from "@chakra-ui/react"
import { AiFillApple, AiOutlineSearch } from "react-icons/ai"
import { TbMenu } from "react-icons/tb"
import Bag from "../Icons/Bag"
const NavigationBar = () => {
    const isMenuVisible = useBreakpointValue({ base: "none", lg: "flex" })
    return (
        <Flex bg="#111" as="nav" gap="1rem" alignItems="center" justifyContent="space-between" px="5rem">
            <Icon boxSize="1.5rem" as={TbMenu} display={isMenuVisible === "flex" ? "none" : "block"} />
            <Icon boxSize="1.5rem" as={AiFillApple} />
            <Flex display={isMenuVisible} justifyContent="space-evenly" width="100%" >
                <Link>
                    Mac
                </Link>
                <Link>
                    iPhone
                </Link>
                <Link>
                    iPad
                </Link>
                <Link>
                    Watch
                </Link>
                <Link>
                    TV
                </Link>
                <Link>
                    Music
                </Link>
                <Link>
                    Support
                </Link>
            </Flex>
            <Icon boxSize="1.5rem" as={AiOutlineSearch} display={isMenuVisible === "flex" ? "flex" : "none"} />
            <Icon boxSize="1.5rem" as={Bag} />
        </Flex>
    )
}

export default NavigationBar

/*
     <Link fontSize="1rem">Mac</Link>
                <Link fontSize="1rem">iPad</Link>
                <Link fontSize="1rem">iPhone</Link>
                <Link fontSize="1rem">Watch</Link>
                <Link fontSize="1rem">TV</Link>
                <Link fontSize="1rem">Music</Link>
                <Link fontSize="1rem">Support</Link>
*/