
import {
    PencilSquareIcon,
    UserGroupIcon,
    HomeIcon,
    PlusIcon,
    } from '@heroicons/react/24/outline';
    
    // Map of links to display in the side navigation.
    // Depending on the size of the application, this would be stored in a database.
    const links = [
      { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { href: '/dashboard/edit-dashboard', icon: PencilSquareIcon}, 
  {name: 'How to Use', href: '', icon: PencilSquareIcon},
  {name: 'Search', href: '', icon: MagnifyingGlassCircleIcon},
  {name: 'About Us', href: '', icon: PencilSquareIcon},
  {name: 'Future Updates', href: '', icon: PencilSquareIcon},
  {name: 'Other websites', href: '', icon: PencilSquareIcon},
  ];
    
 function NavLinks() {
      return (
        <>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <a
                //key={link.name}
                href={link.href}
                className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">
                  {/* {link.name} */}
                  </p>
              </a>
            );
          })}
        </>
      );
    }
    
export default function SideNav() {
    return (
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> 
          
      </div>
      </div>
    );
  }