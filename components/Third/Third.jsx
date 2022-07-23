import { Grid, GridItem, Image } from "@chakra-ui/react";

const Third = () => {
    return (
        <Grid
            bg="#111"
            position="relative"
            justifyContent="center"
            alignItems="center"
            zIndex={50}
            top="0"
            p={3}
            templateRows={{ base: "repeat(3,1fr)", lg: "repeat(1,1fr)" }}
            columnGap={{ base: 4, lg: 5 }}
            templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
            minHeight="100vh"
        >
            <GridItem
                p={{ base: 2, lg: 0 }}
                alignSelf="center"
                justifySelf="right"
                colSpan="1"
                rowSpan="2"
                width={{ base: "100%", lg: "50%" }}
            >
                <Image alt="" src="./assets/cellphonecuttedimg.jpg" width="80%" />
            </GridItem>
            <GridItem
                rowSpan="2"
                alignSelf="center"
                justifySelf="center"
                height="100%"
                width="100%"
            >
                <Image
                    alt=""
                    src="./assets/cellphonecuttedcamera.jpg"
                    width={{ base: "100%", lg: "100%" }}
                    height="100%"
                />
            </GridItem>
            <GridItem
                justifySelf="center"
                alignSelf="left"
                transform={{ base: "rotateZ(0deg)", lg: "rotateZ(-90deg)" }}
                width={{ base: "100%", lg: "100%" }}
                heigh="100%"
                colSpan={{ base: "2", lg: "1" }}
                rowSpan="1"
            >
                <Image
                    alt=""
                    src="./assets/cellphonehorizontal.jpg"
                    objectFit="cover"
                    width="100%"
                    heigh="100%"
                />
            </GridItem>
        </Grid>
    );
};

export default Third;
