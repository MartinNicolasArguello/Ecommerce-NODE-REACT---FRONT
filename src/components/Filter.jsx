import React from 'react';
import { useState } from "react";
import { Box, Checkbox, Stack, Accordion, AccordionIcon, AccordionItem, AccordionButton, AccordionPanel, Divider } from '@chakra-ui/react'
import { CheckboxIcon } from '../resources/checkboxIcon';
const Filter = ({ endPoint, setEndpoint }) => {

    const [typeSelection, setTypeSelection] = useState('&type=');
    const [brandSelection, setBrandSelection] = useState('&brand=');
    const [priceSelection, setPriceSelection] = useState('&price=')

    const typeFilter = (isChecked, e) => {

        setEndpoint(endPoint.replace(typeSelection, ''))
        let newTypeSelection = typeSelection
        if (isChecked) {
            newTypeSelection = newTypeSelection + (',' + e.target.value)
        }
        if (!isChecked) {
            newTypeSelection = newTypeSelection.replace((',' + e.target.value), '')
        }
        setTypeSelection(newTypeSelection)
        setEndpoint('find?' + newTypeSelection + brandSelection + priceSelection)
    }
    const brandFilter = (isChecked, e) => {
        setEndpoint(endPoint.replace(brandSelection, ''))
        let newBrandSelection = brandSelection
        if (isChecked) {
            newBrandSelection = newBrandSelection + (',' + e.target.value)
        }
        if (!isChecked) {
            newBrandSelection = newBrandSelection.replace((',' + e.target.value), '')
        }
        setBrandSelection(newBrandSelection)
        setEndpoint('find?' + newBrandSelection + typeSelection + priceSelection)
    }

    const priceFilter = (isChecked, e) => {
        setEndpoint(endPoint.replace(priceSelection, ''))
        let newPriceSelection = priceSelection
        if (isChecked) {
            newPriceSelection = newPriceSelection + (',' + e.target.value)
        }
        if (!isChecked) {
            newPriceSelection = newPriceSelection.replace((',' + e.target.value), '')
        }
        setPriceSelection(newPriceSelection)
        setEndpoint('find?' + newPriceSelection + typeSelection + brandSelection)
    }

    return (
        <>
            <Box
                h='fit-content'
                w='250px'
                m='12px'


                borderRadius='md'
                bg='brand.wine'
                color='brand.babypowder'
            >

                <Divider />
                <Accordion defaultIndex={[0]} allowMultiple marginTop='10px'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Type
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack spacing={5} direction='column'>

                                <Checkbox value='electric' onChange={(e) => { typeFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Electric
                                </Checkbox>
                                <Checkbox value='acoustic' onChange={(e) => { typeFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Acoustic
                                </Checkbox>
                                <Checkbox value='semi-acoustic' onChange={(e) => { typeFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Semi-Acoustic
                                </Checkbox>
                                <Checkbox value='classic' onChange={(e) => { typeFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Classical
                                </Checkbox>
                            </Stack>
                        </AccordionPanel>

                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Brand
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack spacing={5} direction='column'>

                                <Checkbox value='Fender' onChange={(e) => { brandFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Fender
                                </Checkbox>
                                <Checkbox value='Gibson' onChange={(e) => { brandFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Gibson
                                </Checkbox>
                                <Checkbox value='Schecter' onChange={(e) => { brandFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Schecter
                                </Checkbox>
                                <Checkbox value='Jackson' onChange={(e) => { brandFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    Jackson
                                </Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Price
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack spacing={5} direction='column'>

                                <Checkbox value='a' onChange={(e) => { priceFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />}>
                                    $0 - $599
                                </Checkbox>
                                <Checkbox value='b' onChange={(e) => { priceFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />} >
                                    $599 - $1599

                                </Checkbox>
                                <Checkbox value='c' onChange={(e) => { priceFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />}>
                                    $1599 - $2599

                                </Checkbox>
                                <Checkbox value='d' onChange={(e) => { priceFilter(e.target.checked, e) }} colorScheme='whiteAlpha' icon={<CheckboxIcon />}>
                                    Over $2599

                                </Checkbox>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

        </>
    );
};

export { Filter };