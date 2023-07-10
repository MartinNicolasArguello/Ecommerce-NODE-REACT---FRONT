import React from "react";
import { useState } from "react";
import { Flex, Slide, IconButton } from '@chakra-ui/react'
import { BsCart } from "react-icons/bs";
import { Display } from "./Display";
import { Filter } from "./Filter";
import { Cart } from "./Cart";
const BodyComponent = ({ isOpen, onToggle }) => {

    const [endPoint, setEndpoint] = useState('find?');
    const [cartItems, setCartItems] = useState([]);
    const [cartCards, setcartCards] = useState(0);


    return (
        <Flex wrap='wrap'>
            <Filter setEndpoint={setEndpoint} endPoint={endPoint} grow='100' />
            <Display endPoint={endPoint} cartItems={cartItems} setCartItems={setCartItems} cartCards={cartCards} setcartCards={setcartCards} />
            <IconButton variant='outline'
                position='fixed'
                right='0'
                bg='babypowder'
                color='brand.wine'
                aria-label='Send email' icon={<BsCart />} onClick={onToggle} ></IconButton>
            <Slide in={isOpen} zIndex={2000}
                style={{ width: "28rem" }} >
                <Cart onToggle={onToggle} cartItems={cartItems} setCartItems={setCartItems} cartCards={cartCards} setcartCards={setcartCards} />

            </Slide>
        </Flex>

    );
};

export { BodyComponent };