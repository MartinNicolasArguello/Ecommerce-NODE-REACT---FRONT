import { React, useState, useEffect } from "react";
import { Box, Button, Flex, IconButton, Text, Image, Heading } from "@chakra-ui/react"
import { FaArrowRight, } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";

import { AddIcon, CloseIcon, MinusIcon } from '@chakra-ui/icons'

const Cart = ({ onToggle, cartItems, setCartItems, setcartCards, cartCards }) => {


    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    useEffect(() => {
        let count = 0;
        setTotal(cartItems.reduce((acc, it) => {
            return acc + (it.amount * it.price)
        }, 0))


        cartItems.forEach((i) => {
            count = count + i.amount
        })
        setItemCount(count)

    }, [cartItems])

    const removeItem = (itemForDel) => {
        console.log('oliiiiis', cartCards)

        const newItems = cartItems.filter((item) => item != itemForDel)
        setCartItems(newItems)
        setcartCards(cartCards - 1)

    }

    const handleCheckout = () => {
        setCartItems([])
        window.alert(`Checkout total ${total}`)
    }

    return (
        <>
            <Flex w='28rem' bg='brand.black' rounded='md'
                direction='column'>
                <Flex

                    h='15vh'
                    bg='brand.black'
                    shadow='md'
                >
                    <Flex h='4rem' w='6rem' m='auto' bg='brand.black' >
                        <Box >
                            <FaOpencart className="cartLogo" />
                            <Text bg='brand.black' color='brand.butterscotch' position='absolute' top='50' right='200' > {itemCount} </Text>
                        </Box>

                    </Flex>

                    <IconButton
                        h='30px' w='30px' variant='outline' onClick={onToggle} borderColor='brand.butterscotch' icon={<FaArrowRight fill='#DF9A57' />}
                    />

                </Flex>

                <Flex
                    h='70vh'
                    p='2px'
                    bg='brand.babypowder'
                    shadow='md'
                    flexDirection='column'
                    borderRadius='lg'
                >
                    {cartItems.length != 0 ? cartItems.map((item) =>
                        <Flex
                            flexDirection='row'
                            key={item.id}
                            m='4px'
                            p='2px'
                            h='6rem'
                            borderRadius={'lg'}
                            border='1px'
                            borderColor='brand.charcoal'

                        >
                            <Image
                                borderRadius={'md'}
                                mt='4px'
                                mb='4px'
                                maxW={{ base: '100%', sm: '100px' }}
                                src={item.picOne} alt='Guitar'
                            />

                            <Box mt='6px' flexGrow='1'  >
                                <Heading fontSize='lg'>{item.name}</Heading>
                                <Text fontSize='10' mt='4px'>{item.description}</Text>
                                <Text fontSize='sm'>Quantity: <Text as='span' fontSize='xl' color='brand.butterscotch'> {item.amount}</Text></Text>
                            </Box>

                            <Flex direction='column' borderRadius={'md'}  >

                                <IconButton alignSelf='end' variant='ghost' size='xs' colorScheme='red' icon={<CloseIcon />} onClick={() => removeItem(item)}>
                                    Del
                                </IconButton>
                                <Text align='center' fontSize='2xl' color='brand.butterscotch'>{item.amount * item.price}</Text>

                                <Flex  >

                                    <IconButton variant='outline' size='sm' icon={<AddIcon />} onClick={() => setCartItems([...cartItems], item.amount = item.amount + 1)}>
                                        add
                                    </IconButton>
                                    <IconButton variant='outline' size='sm' icon={<MinusIcon />} isDisabled={item.amount == 1} onClick={() => setCartItems([...cartItems], item.amount = item.amount - 1)}>
                                        min
                                    </IconButton>
                                </Flex>



                            </Flex>
                        </Flex>
                    )
                        : <Text m='auto' >Your cart is currently empty</Text>}
                </Flex>
                <Flex
                    direction='column'
                    justify='space-evenly'
                    h='15vh'
                    p='15px'
                    bg='brand.black'
                    shadow='md'
                >
                    <Flex justify='space-between' bg='brand.black'                    >
                        <Text fontSize='xl' bg='brand.black' color='brand.babypowder' as='p'>TOTAL </Text>
                        <Text fontSize='2xl' bg='brand.black' color='brand.butterscotch' as='p'
                        >{total}
                        </Text>
                    </Flex>
                    <Button bg='brand.black' border='1px' borderColor='brand.butterscotch' color='brand.butterscotch' onClick={() => { handleCheckout() }} isDisabled={total === 0} >Checkout</Button>

                </Flex>

            </Flex >
        </>
    )
};

export { Cart }


