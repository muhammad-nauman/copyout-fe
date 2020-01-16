import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import { VendorsConfig } from 'app/main/vendors/VendorsConfig'
import { UsersConfig } from 'app/main/users/UsersConfig'
import { OrdersConfig } from 'app/main/orders/OrdersConfig'
import { CustomersConfig } from 'app/main/customers/CustomersConfig'
import { RidersConfig } from 'app/main/riders/RidersConfig'
import { LoginConfig } from 'app/main/auth/login/LoginConfigs'
import { RegisterConfig } from 'app/main/auth/register/RegisterConfig'
import { ForgotPasswordConfig } from 'app/main/auth/password/ForgotPasswordConfig'
import { DashboardConfig } from 'app/main/dashboard/DashboardConfig'

const routeConfigs = [
    VendorsConfig,
    UsersConfig,
    OrdersConfig,
    CustomersConfig,
    RidersConfig,
    LoginConfig,
    RegisterConfig,
    ForgotPasswordConfig,
    DashboardConfig,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/login"/>
    }
];

export default routes;
