import { Card, DonutChart, Title } from "@tremor/react";
import React from "react";

const cities = [{
    name: 'New York',
    sales: 9800

},
{
    name: 'London' ,
    sales: 4567
},
{
    name:'Hong Kong' ,
    sales: 3908 
},

{
    name: 'San Francisco' ,
    sales: 2400
},

{
    name:'Singapure' ,
    sales: 1908 
},

{
    name:'Zurich' ,
    sales: 1398
},

]

const ChartDonut =() => {
    return(
   <Card>
        <Title>Sales by City</Title>
        <DonutChart
            data={cities}
            category='sales'
            dataKey='name'
            marginTop="mt-6"
            colors={["yellow","violet","green","rose","cyan","indigo"]}
            />
   </Card>
    )
}

export default ChartDonut