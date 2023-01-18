import { Card, Flex, Metric, ProgressBar, Text } from "@tremor/react";
import React from "react";
import TotalUsuarios from "../assets/components/TotalUsuarios";


const CardBase = () => {
    return (
        
        <Card maxWidth= 'max-w-sm'>
            <TotalUsuarios>
            <Text>Productos</Text>
            <Metric>456</Metric>
            <Flex  marginTop= 'mt-4'>
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
            </Flex>
            <ProgressBar percentageValue={10} marginTop= "-mt-2"/>
            </TotalUsuarios>
        </Card>
       
    )
}

export default CardBase