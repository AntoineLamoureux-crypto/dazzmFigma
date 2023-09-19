import React from 'react';
import {
  Text,
  Stack,
  Input,
  InputGroup,
  Checkbox,
  Button,
  HStack,
  Image,
  Divider,
  Center,
} from '@chakra-ui/react';
import loginImage from '../../images/Dazzm_shape_expand_10.svg';
import dazzm_octopus_logo from '../../images/Custom_Logo_Octopus.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <HStack maxW="100vw" maxH="100vh">
      <Stack align="center" background="white" w="40%">
        <Stack align="center">
          <Stack maxWidth="100%" pos="absolute" top="175">
            <Image src={dazzm_octopus_logo} maxH="fit-content" />
          </Stack>
          <Stack paddingTop="100px" spacing="20px">
            <Stack width="384px" maxWidth="100%">
              <Text
                lineHeight="1.43"
                fontWeight="bold"
                fontSize="32px"
                color="gray.800"
                paddingBottom="10px"
              >
                Connexion
              </Text>
              <Stack
                direction="row"
                align="center"
                spacing="0px"
                alignSelf="stretch"
              >
                <Text
                  lineHeight="1.43"
                  fontWeight="bold"
                  fontSize="16px"
                  color="gray.800"
                >
                  Nom d’utilisateur
                </Text>
              </Stack>
              <InputGroup size="lg">
                <Input variant="outline" size="lg" textColor="black" />
              </InputGroup>
            </Stack>
            <Stack width="384px" maxWidth="100%" spacing="16px">
              <Stack
                direction="row"
                align="center"
                spacing="0px"
                alignSelf="stretch"
              >
                <Text
                  fontWeight="700"
                  fontSize="16px"
                  fontStyle="normal"
                  lineHeight="100%"
                  color="gray.800"
                >
                  Mot de passe
                </Text>
              </Stack>
              <InputGroup size="lg">
                <Input
                  size="lg"
                  textColor="black"
                  variant="outline"
                  type="password"
                />
              </InputGroup>
            </Stack>

            <HStack>
              <Checkbox
                size="lg"
                defaultChecked={false}
                alignSelf="stretch"
                borderColor="gray.400"
              />
              <Text textColor="black">
                Se souvenir de mon nom d’utilisateur
              </Text>
            </HStack>
            <Button
              size="lg"
              bgColor="gray.400"
              _hover={{ bgColor: 'cyan.700' }}
              height="48px"
              alignSelf="stretch"
              textColor="white"
            >
              Ouvrir une session
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" bottom={10} pos="absolute">
          <Center gap="3">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => navigate('/connexion/réinitialisation')}
            >
              Mot de passe oublié?
            </Text>
            <Divider orientation="vertical" h="5" w="1px" bgColor="gray.800" />
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              onClick={() => navigate('/inscription-service')}
            >
              Inscription au service
            </Text>
          </Center>
        </Stack>
      </Stack>
      <Stack w="60%" background="cyan.800">
        <Image src={loginImage} objectFit="cover" maxH="100vh" />
      </Stack>
    </HStack>
  );
}
