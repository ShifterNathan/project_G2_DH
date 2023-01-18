import { ColGrid, Flex, Card, Block, Metric, BadgeDelta, ProgressBar, } from "@tremor/react";
import React from "react";

const data = [
    {
        title: "Productos",
        metric: '1380',
        progress: 30.9,
        target: '$400,000',
        delta: '13,2',
        deltaType: 'moderateIncrease',

    },
    {
        title: "Profit",
        metric: '$ 12,699',
        progress: 15.9,
        target: '$80,000',
        delta: '13,2',
        deltaType: 'moderateIncrease',

    },
    {
        title: "Customer",
        metric: '$ 12,699',
        progress: 15.9,
        target: '$80,000',
        delta: '13,2',
        deltaType: 'moderateIncrease',

    },
    {
        title: "Customer",
        metric: '$ 12,699',
        progress: 15.9,
        target: '$80,000',
        delta: '13,2',
        deltaType: 'moderateIncrease',

    },
]

const CardGridMap = () => {
    return (
        <ColGrid numColsMd={2} numColsLg={3} marginTop="mt-6" gapX="gap-x-6" gapY="gap-y-6" >
            { data.map((item)=> (
                <Card key={item.title}>
                    <Flex alignItems="items-start">
                        <Block>
                            <text>{item.title}</text>
                            <Metric>{item.metric}</Metric>
                            <BadgeDelta text={item.delta}/>
                        </Block>
                    </Flex>

                    <Flex marginTop="mt-4" spaceX="space-x-2">
                    <text>{`${item.progress}%(${item.metric})`}</text>
                    <text>{item.target}</text> 
                    </Flex>
                    <ProgressBar percentageValue={item.progress} marginTop="mt-3"/>
                </Card>
            ))}
        </ColGrid>
    )
}

export default CardGridMap