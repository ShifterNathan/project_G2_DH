import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, Metric, Text, Icon, Flex, Color, Block, ColGrid,} from '@tremor/react';
import { CashIcon, TicketIcon, UserGroupIcon,} from '@heroicons/react/solid';

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

  
// const estado = useState ([
//     {titulo: "Cantidad total de usuarios DogHouse", valor: 0},
//     ]);
// const valoresEstado = estado[0];
// const setEstado = estado[1];

// let actualizarUsuarios = () => {  
//     fetch('http://localhost:3005/api/usuarios')
//     .then((response) => response.json())
//     .then((data) => setEstado([
//         {valor: data.count},
//     ]));
// }



return (
    
    <ColGrid numColsSm={ 2 } numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6">
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
    </ColGrid>
);

    // <div>
    //        <div className="col-md-4 mb-4">
    //            <div className="card border-left-primary shadow h-100 py-2">
    //                <div className="card-body">
    //                    <div className="row no-gutters align-items-center">
    //                        <div className="col mr-2">
    //                            <div className="" onMouseOver={actualizarUsuarios}> Cantidad total de usuarios</div>
    //                            <div className="">{valoresEstado[0].valor}</div>
    //                        </div>
    //                        <div className="col-auto">
    //                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
    //    </div>
    //   );
}

export default TotalUsuarios;