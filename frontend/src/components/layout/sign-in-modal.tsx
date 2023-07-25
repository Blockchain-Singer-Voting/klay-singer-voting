/**
 * @since 2023/07/16
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

import Modal from '@/components/shared/modal'
import { useState, Dispatch, SetStateAction, useCallback, useMemo, useEffect } from 'react'
import { LoadingDots } from '@/components/shared/icons'
import Image from 'next/image'
import MetaMaskLogo from '@/assets/metamask.svg'
import { signIn } from 'next-auth/react'
import { useConnect, useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CONFIGS } from 'src/configs'
import { config } from '@/app/providers'
import Button from '../shared/button'

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean
  setShowSignInModal: Dispatch<SetStateAction<boolean>>
}) => {
  const [signInClicked, setSignInClicked] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork({
    chainId: CONFIGS.CHAIN_ID,
    onError: (error) => {
      setSignInClicked(false)
      setError(error.message)
    },
  })
  const {
    connect,
    isError,
    error: errorConnect,
  } = useConnect({
    connector: config.connectors[1],
  })

  useEffect(() => {
    setError('')
  }, [showSignInModal])

  useEffect(() => {
    if (isError && errorConnect) {
      setSignInClicked(false)
      setError(errorConnect.message)
    }
  }, [isError, errorConnect])

  useEffect(() => {
    console.log(address, chain, signInClicked)
    if (address && chain && signInClicked) {
      if (chain.id === CONFIGS.CHAIN_ID) {
        console.log('success')
        setError('')
        signIn('credentials', { address, callbackUrl: '/' })
      } else {
        switchNetwork?.()
      }
    }
  }, [address, chain, signInClicked])

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-md md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <h3 className="font-display text-2xl font-bold">Login</h3>
          <p className="text-sm text-gray-500">Please click below button to login.</p>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {isConnected && chain?.id === CONFIGS.CHAIN_ID && (
            <>
              <p className="text-sm text-pink-500">
                Connect wallet successfully.
                <br />
                Processing login...
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? 'cursor-not-allowed border-pink-200 bg-pink-100'
                : 'border border-pink-200 bg-pink-500 text-white hover:bg-pink-50 hover:text-pink-500'
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSignInClicked(true)
              setError('')
              connect()
            }}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Image
                  src={MetaMaskLogo.src}
                  alt="metamask"
                  width={50}
                  height={50}
                  className="h-5 w-5"
                />
                <p>Login with MetaMask</p>
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false)

  const SignInModalCallback = useCallback(() => {
    return <SignInModal showSignInModal={showSignInModal} setShowSignInModal={setShowSignInModal} />
  }, [showSignInModal, setShowSignInModal])

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  )
}
