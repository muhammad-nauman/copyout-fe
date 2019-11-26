import Login from './Login';

export const LoginConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display : false,
                },
                toolbar       : {
                    display : false,
                },
                settings: {
                    display: false,
                }
            }
        }
    },
    routes  : [
        {
            path     : '/login',
            component: Login,
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
