import React from "react";
import { Card, Image, CardBody, Stack, Heading, Text, Divider, Button, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useFetch } from '../hooks/useFetch';



const Display = ({ endPoint, cartItems, setCartItems, cartCards, setcartCards }) => {

    const guitars = useFetch(`http://localhost:3000/${endPoint}`).data

    const addToCart = (guitar) => {
        console.log('oliiiiis', cartCards)


        if (cartCards >= 6) {
            window.alert('Cart items limit exceded')
        }
        else {

            if (!cartItems.some(it => it.id === guitar.id)) {
                guitar.amount = 1
                setCartItems([...cartItems, guitar])
            }
            setcartCards(cartCards + 1)

        }

    }

    return (
        <>
            <SimpleGrid
                w='100rem'
                h='100%'
                // columns={4}

                minChildWidth='22rem'

                spacing='10px' mt='34px'  >
                {guitars ? guitars.map((guitar) =>
                    <Card key={guitar.id} m='1rem'
                        w='22rem'
                        h='30rem'
                        borderTop='8px' borderColor="brand.charcoal" shadow="lg" borderRadius="lg"
                        className="crd"
                        _hover={{
                            shadow: 'xl',
                            transitionDuration: '0.2s',
                            transitionTimingFunction: "ease-in-out"
                        }}
                    >

                        <CardBody >
                            <Image
                                m='auto'
                                mt='-5'
                                src={guitar.picOne}
                                alt={guitar.name}
                                borderRadius='lg'
                                h='14rem'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading m='auto' size='md' >{guitar.name}</Heading>
                                <Text m='auto' fontSize='s' >
                                    {guitar.description}
                                </Text>
                                <Text m='auto' color='brand.butterscotch' fontSize='2xl'>
                                    ${guitar.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <Button
                            h='4rem'
                            borderTopRadius='none'
                            bg='brand.black'
                            color='brand.butterscotch'
                            fontSize='xl'
                            onClick={() => { addToCart(guitar) }} isDisabled={cartItems.some(it => it.id === guitar.id)} >
                            Add to cart
                        </Button>
                    </Card>
                ) : null}
            </SimpleGrid >

        </>
    );
};

export { Display };