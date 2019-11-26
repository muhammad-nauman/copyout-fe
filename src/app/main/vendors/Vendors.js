import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import MainTable from '../shared/Table';

const styles = theme => ({
    layoutRoot: {}
});

function createData(name, calories, fat, carbs, protein) {
    return [name, calories, fat, carbs, protein];
}

const rows = [
    createData('Ali & Co', 'Muhammad Ali', 'Active', 24, 4.0),
    createData('CopyOut Vendor', 'Hamza Ghani', 'Active', 37, 4.3),
    createData('Khurram Printers', 'Khurram', 'In-Active', 24, 6.0),
    createData('Print Me', 'Ahmed Ali', 'Active', 67, 4.3),
    createData('Cube Tech Printers', 'Kamran Khan', 'Active', 49, 3.9),
];

class Vendors extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Vendors</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>All Vendors</h4></div>
                }
                content={
                    <div className="p-24">
                        <MainTable data={rows} headings={['Vendor Name', 'Vendor Owner', 'Status', 'Orders', 'Action']} />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(Vendors);