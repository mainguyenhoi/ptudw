export interface NavigationInterface {
    path: string;
    icon?: string;
    label: string;
    children?: NavigationInterface[];
}

export const NavigationMenu: {
    admin: NavigationInterface,
    dashboard: NavigationInterface,
    report: NavigationInterface,
} = {
    admin: {
        path: '/administrator', icon: 'users-cog', label: 'Administrator',
        children: [
            {
                path: '/departments', icon: 'building', label: 'Department',
            },
            {
                path: '/reports', icon: 'chart-area', label: 'Reports',
            }
        ]
    },
    dashboard: {
        path: '/dashboard', icon: 'home', label: 'Home',
    },
    report: {
        path: '/reports', icon: 'chart-area', label: 'Reports',
        children: [
        ]
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
