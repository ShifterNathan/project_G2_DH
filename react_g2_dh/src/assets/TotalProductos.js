import React from 'react';
import { useState, useEffect,  } from 'react';
import { Card, Metric, Text, Icon, Flex, Color, Block, ColGrid,} from '@tremor/react';
import { CashIcon, TicketIcon, UserGroupIcon,} from '@heroicons/react/24/solid';

function TotalProductos() {

    const [proucts, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:3005/api/productos')
        .then((response) => response.json())
        .then((data) => { 
            setProducts(data.count) 
            console.log(data)
        })
    });

return (
    

            <Card decoration="top" decorationColor='indigo'>
                <Flex justifyContent="justify-start" spaceX="space-x-4">
                    <Icon
                        icon='UserGroupIcon'
                        variant="light"
                        size="xl"
                        color='indigo'
                    />

                    <Block truncate={ true }>
                        <Text>Cantiad de prouctos</Text>
                        <Metric truncate={ true }>{proucts}</Metric>
                    </Block>
                </Flex>
            </Card>

);

}

export default TotalProductos;