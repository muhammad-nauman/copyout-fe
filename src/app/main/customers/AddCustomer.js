import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class AddCustomer extends Component {

    render()
    {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Add New Customer</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Provide the details for the new customer</h4></div>
                }
                content={
                    <div className="p-24">
                        <DemoContent/>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(AddCustomer);