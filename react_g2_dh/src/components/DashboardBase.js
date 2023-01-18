import {  Tab, TabList, Text, Title, Block, } from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut";
import TableBase from "./TableBase";
/*import React from "react";*/

const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)
    return (
        <main className='bg-slate-200 p-6 sm-:p-10'>
            <Title>Dashboard</Title>
            <Text>Ejemplo de Dashboard</Text>

            <TabList defaultValue={selectedView} handleSelect={ value => selectedView(value)} marginTop= "mt-6">
                <Tab value={1} text="Principal"/>
                <Tab value={2} text="Detalles"/>
            </TabList>

            { selectedView === 1? (
    <>  
<CardGridMap/>
    {/*<ColGrid numColsMd={2} numColsLg={3}marginTop="mt-6" gapX="gap-x-6" gapY="gap-y-6">
    <Card>
        <div className='h-28 bg-indigo-200' />
    </Card> 
    <Card>
        <div className='h-28 bg-indigo-300' />
    </Card> 
    <Card>
        <div className='h-28 bg-indigo-400' />
    </Card> 
            </ColGrid>*/}

    <Block>
        <ChartDonut/>
    </Block>
    </>
        
) : (
    <>
    <Block marginTop="mt-6">
        <TableBase/>
    </Block>        
    </>
    )
}
        
        
        </main>
    )
} 
export default DashboardBase