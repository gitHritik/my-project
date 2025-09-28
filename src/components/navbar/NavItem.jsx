const NavItem = ({ name, href, isActive = false }) => {
    return (
        <a
            href={href}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
        >
            {name}
        </a>
    );
};


export default NavItem;