import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class Customers extends Component {

    render()
    {
        const { classes } = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Customers</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Customers of the Application</h4></div>
                }
                content={
                    <div className="p-24">
                        <h4></h4>
                        <br/>
                        <DemoContent/>
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Customers);