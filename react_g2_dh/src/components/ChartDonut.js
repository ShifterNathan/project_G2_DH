import { Card, DonutChart, Title } from "@tremor/react";
import React from "react";

const cities = [{
    name: 'Capital Federal',
    sales: 9800

},
{
    name: 'Vicente Lopez' ,
    sales: 4567
},
{
    name:'Pilar' ,
    sales: 3908 
},

{
    name: 'Morón' ,
    sales: 3400
},

{
    name:'Gran Buenos Aires' ,
    sales: 1908 
},

{
    name:'Quilmes' ,
    sales: 10398
},

]

const ChartDonut =() => {
    return(
   <Card>
        <Title>Ventas en Capital Federal y Gran Buenos Aires DogHouse</Title>
        <DonutChart
            data={cities}
            category='sales'
            dataKey='name'
            marginTop="mt-6"
            //colors={["yellow","violet","green","rose","cyan","indigo"]}
            />
   </Card>
    )
}

export default ChartDonut