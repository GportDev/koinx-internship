'use client';

import { List } from '@phosphor-icons/react/dist/ssr';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import React from 'react';

import Link from 'next/link';

export default function MobileMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='lg:hidden'>
          <List size={32} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='mr-4 rounded-lg border border-grey/40 bg-white p-4 shadow-lg transition-all will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade'
          sideOffset={5}
        >
          <DropdownMenu.Arrow className='-translate-x-2 fill-grey' />
          <nav className='flex flex-col items-center gap-6 font-bold '>
            <DropdownMenu.Item>Crypto Taxes</DropdownMenu.Item>
            <DropdownMenu.Item>Free Tools</DropdownMenu.Item>
            <DropdownMenu.Item>Resource Center</DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link
                href={'https://www.koinx.com/'}
                target='_blank'
                className='rounded-lg bg-blue px-4 py-2 text-white transition-all hover:scale-105 hover:bg-blue/90'
              >
                Get Started
              </Link>
            </DropdownMenu.Item>
          </nav>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
