import React from 'react';
import { useState, useEffect,  } from 'react';
import { Card, Metric, Text, Icon, Flex, Color, Block, ColGrid,} from '@tremor/react';
import { CashIcon, TicketIcon, UserGroupIcon,} from '@heroicons/react/24/solid';

function TotalUsuarios() {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('http://localhost:3005/api/usuarios')
        .then((response) => response.json())
        .then((data) => { 
            setUsers(data.count) 
            console.log(data)
        })
    });

return (
    

            <Card decoration="top" decorationColor='amber'>
                <Flex justifyContent="justify-start" spaceX="space-x-4">
                    <Icon
                        icon='UserGroupIcon'
                        variant="light"
                        size="xl"
                        color='amber'
                    />

                    <Block truncate={ true }>
                        <Text>Cantiad de usuarios</Text>
                        <Metric truncate={ true }>{users}</Metric>
                    </Block>
                </Flex>
            </Card>

);

}

export default TotalUsuarios;