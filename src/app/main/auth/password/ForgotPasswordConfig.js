import ForgotPassword from './ForgotPassword';

export const ForgotPasswordConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display : false,
                },
                toolbar       : {
                    display : false,
                },
                rightSidePanel: {
                    display : false
                },
                settings        : {
                    display: false,
                }
            }
        }
    },
    routes  : [
        {
            path     : '/forgot-password',
            component: ForgotPassword
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
