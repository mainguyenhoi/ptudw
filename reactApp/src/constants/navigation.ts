export interface NavigationInterface {
    path: string;
    icon?: string;
    label: string;
    children?: NavigationInterface[];
    role? : any[]
}

export const NavigationMenu: {
    admin: NavigationInterface,
    dateOff: NavigationInterface,
    WorkingForm: NavigationInterface,
} = {
    admin: {
        path: '/administrator', icon: 'users-cog', label: 'Administrator',
        children: [
            {
                path: '/users', icon: 'chart-area', label: 'Users', role: ['QLDV', 'QLCN'],
            },
            {
                path: '/working-forms', icon: 'building', label: 'Working form', role: ['QLDV', 'QLCN']
            },
            {
                path: '/date-off-forms', icon: 'building', label: 'Date off form', role: ['QLDV', 'QLCN']
            },
            {
                path: '/salary-keepers', icon: 'building', label: 'Salary keeper', role: ['QLCN']
            },
            {
                path: '/statistics', icon: 'building', label: 'Statistics', role: ['QLCN']
            },
           
        ]
    },
    dateOff: {
        path: '/date-off-forms', icon: 'home', label: 'Date off form',
    },
    WorkingForm: {
        path: '/working-forms', icon: 'chart-area', label: 'Working form',

    }
};

interface NavMenu {
    path: string,
    label: string,
    divider: boolean | undefined
}
export const navMenu: NavMenu[] = [
    {path: '/app/profile', label: 'Profile', divider: false},
    {path: '/app/contacts', label: 'Contacts', divider: false},
    {path: '/app/inbox', label: 'Mailbox', divider: false},
    {divider: true, path: '', label: ''},
    {path: '/login', label: 'Logout', divider: false},
];
