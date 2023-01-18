import { CameraIcon } from "@heroicons/react/24/solid";
import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import React from "react";
import data from '../data.json'
const TableBase = ()=>{
    //console.log(data)
    return (
        <Card>
            <Title>List of data</Title>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                <TableBody>
                    { data.map ((item) => (
                        <TableRow>
                            <TableCell> {item.Role}</TableCell>
                            <TableCell> {item.Departement}</TableCell>
                            <TableCell> {item.name}</TableCell>
                            <TableCell> <Badge text={item.status} color="green" icon={CameraIcon}/></TableCell>
                        </TableRow>
                     )) }
                
                </TableBody>
                </TableHead>
            </Table>
        </Card>
    )
}

export default TableBase