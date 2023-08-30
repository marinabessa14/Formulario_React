import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
} from "@chakra-ui/react";

function App () {
    return (
        <Box h="100vh">
            <Center
              as="header"
              h={150}
              bg="teal.500"
              color="white"
              fontWeight="bold"
              fontSize="8x1"
              pg="8"
                >
                    FORMULÁRIO
            </Center>
            <Flex 
              align="center"
              justify="center"
              bg="blackAlpha.200"
              h="calc(100vh - 150px)"
            >
                <Center
                  w="100%"
                  maxW={840}
                  bg="white"
                  top={100}
                  position="absolute"
                  borderRadius={5}
                  p="6"
                  boxShadow="0 1px 2px #ccc"
                >
                    <FormControl display="flex" flexDir="column" gap="4">
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                                <Input id="nome"></Input>
                            </Box>
                            <Box w="100%">
                                <FormLabel htmlFor="email">E-mail</FormLabel>
                                <Input id="email" type="email"></Input>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                                <Input id="nasc" type="date"></Input>
                            </Box>
                            <Box w="100%">
                                <FormLabel htmlFor="cel">Celular</FormLabel>
                                <Input id="cel" type="number"></Input>
                            </Box>
                            <Box w="100%">
                                <FormLabel htmlFor="Telefone">Telefone</FormLabel>
                                <input id="Telefone" type="number"></input>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                                <Input id="endereco"></Input>
                            </Box>
                            <Box w="100%">
                                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                                <Input id="cidade"></Input>
                            </Box>
                        </HStack>
                        <HStack spacing="4">
                            <Box w="100%">
                                <FormLabel>Sexo</FormLabel>
                                <RadioGroup defaultValue="Masculino">
                                    <HStack spacing="24px">
                                        <Radio value="Masculino">Masculino</Radio>
                                        <Radio value="Feminino">Feminino</Radio>
                                        <Radio valu="Outro">Outro</Radio>
                                    </HStack>
                                </RadioGroup>
                            </Box>
                        </HStack>
                        <HStack justify="center">
                            <Button
                             w={240}
                             p="6"
                             type="submit"
                             bg="teal.600"
                             color="white"
                             fontWeight="bold"
                             fontSize="x1"
                             mt="2"
                             _hover={{bg: "teal.800"}}
                            >
                                Enviar

                            </Button>
                        </HStack>
                    </FormControl>

                </Center>
            </Flex>
        </Box>
    )
}

export default App;