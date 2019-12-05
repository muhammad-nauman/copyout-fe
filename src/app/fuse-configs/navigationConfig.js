const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
        ]
    },
    {
        id        : 'dashboard',
        title     : 'Dashboard',
        type      : 'item',
        icon      : 'apps',
        url       : '/dashboard',
    },
    {
        'id'      : 'users',
        'title'   : 'Management',
        'type'    : 'collapse',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Vendors',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/vendors'
            },
            {
                'id'   : 'example-component',
                'title': 'Users',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/users'
            },
            {
                'id'   : 'example-component',
                'title': 'Riders',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/riders'
            }
        ]
    },
];

export default navigationConfig;
