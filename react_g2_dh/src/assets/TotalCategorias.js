import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, List, ListItem, Icon, Text, Bold, Flex, Title, ButtonInline, Block} from '@tremor/react';
import { FireIcon, GiftTopIcon, EyeDropperIcon} from '@heroicons/react/24/solid';


function TotalCategorias() {

    const [category, setCategory] = useState([{
        subTitle1: "Comida natural",
        comida_natural: 0,

        subTitle2: "Categoria: snacks",
        category_snacks: 0,

        subTitle3: "Categoria: suplementos",
        category_suplementos: 0,
    }]);

    useEffect(() => {
        fetch('https://doghousefood.onrender.com/api/productos')
        .then((response) => response.json())
        .then((data) => {   
            setCategory([{
                subTitle1: "Comida natural",
                comida_natural: data.countByCategory.category_comida_natural,

                subTitle2: "Categoria: snacks",
                category_snacks: data.countByCategory.category_snacks,

                subTitle3: "Categoria: suplementos",
                category_suplementos: data.countByCategory.category_suplementos,
            }])
        })
        .catch((error) => {
        console.log(error)
        })
    });

    return (
        <Card hFull={ true }>
            <Title>Cantidad productos por categoría</Title>
            <List marginTop="mt-4">
                    <ListItem marginTop="mt-6">
                        <Flex justifyContent="justify-start" spaceX="space-x-4" truncate={ true } >
                            <FireIcon className="h-10 w-10 text-orange-500"/>
                            <Block truncate={ true }>
                                <Text truncate={ true }><Bold>{category[0].subTitle1}</Bold></Text>
                            </Block>
                        </Flex>
                        <Text>{ category[0].comida_natural }</Text>
                    </ListItem >
                    <ListItem marginTop="mt-6">
                        <Flex justifyContent="justify-start" spaceX="space-x-4" truncate={ true }>
                            <GiftTopIcon className="h-10 w-10 text-emerald-500"/>
                            <Block truncate={ true }>
                                <Text truncate={ true }><Bold>{category[0].subTitle2}</Bold></Text>
                            </Block>
                        </Flex>
                        <Text>{ category[0].category_snacks }</Text>
                    </ListItem>
                    <ListItem marginTop="mt-6">
                        <Flex justifyContent="justify-start" spaceX="space-x-4" truncate={ true }>
                            <EyeDropperIcon className="h-10 w-10 text-cyan-500"/>
                            <Block truncate={ true }>
                                <Text truncate={ true }><Bold>{category[0].subTitle3 }</Bold></Text>
                            </Block>
                        </Flex>
                        <Text>{ category[0].category_suplementos }</Text>
                    </ListItem>
            </List>
        </Card>
    );
}

export default TotalCategorias;