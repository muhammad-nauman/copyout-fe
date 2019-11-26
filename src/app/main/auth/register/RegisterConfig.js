import Register from './Register';

export const RegisterConfig = {
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
            path     : '/register',
            component: Register
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
