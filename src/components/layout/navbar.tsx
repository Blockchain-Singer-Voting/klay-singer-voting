/**
 * @since 2023/07/16
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/lib/hooks/use-scroll'
import { useSignInModal } from './sign-in-modal'
import UserDropdown from './user-dropdown'
import { Session } from 'next-auth'
import Button from '../shared/button'

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal()
  const scrolled = useScroll(50)

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl' : 'bg-white/0'
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>Singer</p>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <Button onClick={() => setShowSignInModal(true)}>Sign In</Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
