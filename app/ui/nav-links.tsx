'use client'

import {
    BuildingLibraryIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    TagIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Expenses',
        href: '/dashboard/expenses',
        icon: DocumentDuplicateIcon,
    },
    { name: 'Categories', href: '/dashboard/categories', icon: TagIcon },
    {
        name: 'Bank Accounts',
        href: '/dashboard/bank-accounts',
        icon: BuildingLibraryIcon,
    },
]

export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blud-900':
                                    pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}