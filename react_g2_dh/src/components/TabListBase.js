import { Card, Tab, TabList } from "@tremor/react";
import React, { useState } from "react";
import {HandThumbUpIcon, HandThumbDownIcon} from '@heroicons/react/24/solid'

const TabListBase = () => {
    const [selectedView, setSelectedView] = useState(1)
    return (
        <>
        <TabList 
            handleSelect={ value=> setSelectedView(value)}
            defaultValue={selectedView}
            marginTop= "mt-6">
            <Tab value={1} text= "Pestaña 1" icon={HandThumbUpIcon }/> 
            <Tab value={2} text= "Pestaña 2" icon={HandThumbDownIcon}/> 

</TabList>

{ selectedView === 1? (
    <Card>
        <div className='h-28 bg-green-300' />
    </Card>
) : (
    <Card>
        <div className='h-28 bg-blue-700' />
    </Card>         

    )
}
        
        </>
    )
}
{/*Usamos operadores ternarios para decir que si seclecciona 1 nos muestre una tarjeta y si seleccionea un número
distinto de 1 muestre otra tarjeta*/}
export default TabListBase

