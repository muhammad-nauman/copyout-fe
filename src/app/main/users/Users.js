import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import MainTable from '../shared/Table';

const styles = theme => ({
    layoutRoot: {}
});

function createData(name, calories, fat, carbs, protein) {
    return [name, calories, fat, carbs, protein];
}

const rows = [
    createData('Muhammad Ali', 'ali@copyout.com', 'Active', 24, 4.0),
    createData('Hamza Ghani', 'hamza@copyout.com', 'Active', 37, 4.3),
    createData('Khurram Ghani', 'khurram@copyout.com', 'In-Active', 24, 6.0),
    createData('CoupyOut Admin', 'admin@copyout.com', 'Active', 67, 4.3),
    createData('Muhammad Nauman', 'nauman@copyout.com', 'Active', 49, 3.9),
];

class Users extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Users</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>All Users</h4></div>
                }
                content={
                    <div className="p-24">
                        <MainTable data={rows} headings={['Name', 'Email', 'Status', 'Orders', 'Action']} />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Users);