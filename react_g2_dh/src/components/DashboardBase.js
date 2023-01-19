// import React from "react"
import { ColGrid,Card, Tab, TabList, Text, Title, Block, } from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut";
import TableBase from "./TableBase";





const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)
    return (
        <main className='bg-slate-200 p-6 sm-:p-15'>
            <Title>Dashboard</Title>
            <Text> <strong>DogHouse</strong></Text>
            
            <TabList defaultValue={selectedView} handleSelect={ value => selectedView(value)} marginTop= "mt-6">
                <Tab value={selectedView} text="Principal"/>
                <Tab value={selectedView} text="Detalles"/>
            </TabList>
 

    <CardGridMap />
    
    <Block marginTop="mt-6">
        <ChartDonut/>
    </Block>

        


    <Block marginTop="mt-6">
        <TableBase/>
    </Block>        


        
        
        </main>
    )
} 
export default DashboardBase