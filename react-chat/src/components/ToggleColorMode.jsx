import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColormode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m="lrem"
        >
            {colorMode === "dark" ? (
                <SunIcon color="orange.200"/>
            ) : (
                    <MoonIcon color="blue.700"/>
            )}
            </Button>
    );
};

export default ToggleColormode;