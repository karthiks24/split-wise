import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import IconMenuExampleSimple from './icon.jsx';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const tableData = [
    {
        name: 'John Smith',
        accountnumber: '00178965412',
        totalbal: 'You paid: 235'
    },
    {
        name: 'Randal White',
        accountnumber: '00185632147',
        totalbal: 'You paid:5'

    },
    {
        name: 'Stephanie Sanders',
        accountnumber: '001562303',
        totalbal: 'You owe: 835'
    },
    {
        name: 'Steve Brown',
        accountnumber: '0018546233',
        totalbal: 'You owe: 2305'
    },
    {
        name: 'Joyce Whitten',
        accountnumber: '001002456',
        totalbal: 'You paid: 23'
    },
    {
        name: 'Samuel Roberts',
        accountnumber: '005623003',
        totalbal: 'You paid: 35'
    },
    {
        name: 'Adam Moore',
        accountnumber: '001005803',
        totalbal: 'You paid: 25'
    },
];


/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: true,
        showRowHover: true,
        selectable: true,
        multiSelectable: true,
        enableSelectAll: true,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                                account holders
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Account Number</TableHeaderColumn>
                            <IconMenuExampleSimple>Total balance</IconMenuExampleSimple>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.accountnumber}</TableRowColumn>
                                <TableRowColumn>{row.totalbal}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >

                    </TableFooter>
                </Table>

            </div>
        );
    }
}