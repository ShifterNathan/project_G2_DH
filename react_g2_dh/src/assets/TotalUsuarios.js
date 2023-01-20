import React from 'react';
import { useState, useEffect,  } from 'react';
import { Card, Metric, Text, Flex, Color, Block, ColGrid,} from '@tremor/react';
import {UserGroupIcon} from '@heroicons/react/24/solid';

function TotalUsuarios() {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('http://localhost:3005/api/usuarios')
        .then((response) => response.json())
        .then((data) => { 
            setUsers(data.count) 
        })
    },[]);

    return (
        <Card decoration="top" decorationColor='amber'>
            <Flex justifyContent="justify-start" spaceX="space-x-4">
                <UserGroupIcon className="h-20 w-20 text-amber-500"/>

                <Block truncate={ true }>
                    <Text>Cantidad de usuarios</Text>
                    <Metric truncate={ true }>{users}</Metric>
                </Block>
            </Flex>
        </Card>
    );
}

export default TotalUsuarios;