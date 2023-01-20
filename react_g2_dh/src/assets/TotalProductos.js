import React from 'react';
import { useState, useEffect,  } from 'react';
import { Card, Metric, Text, Icon, Flex, Color, Block, ColGrid,} from '@tremor/react';
import { CubeIcon } from '@heroicons/react/24/solid';

function TotalProductos() {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:3005/api/productos')
        .then((response) => response.json())
        .then((data) => { 
            setProducts(data.count) 
        })
    }, []);

    return (
        <Card decoration="top" decorationColor='indigo'>
            <Flex justifyContent="justify-start" spaceX="space-x-4">
                <CubeIcon className="h-20 w-20 text-indigo-500"/>
                <Block truncate={ true }>
                    <Text>Cantidad de productos</Text>
                    <Metric truncate={ true }>{products}</Metric>
                </Block>
            </Flex>
        </Card>
    );
}

export default TotalProductos;