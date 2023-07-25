/**
 * @since 2023/07/24
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

export default function Button(props: any) {
  const { children, className, ...others } = props
  return (
    <button
      className={Array.from(
        new Set(
          (className?.split(' ') || []).concat(
            'rounded-md border border-pink-500 bg-pink-500 p-1.5 px-4 text-sm text-white transition-all hover:border-pink-500 hover:bg-transparent hover:text-pink-500'.split(
              ' ',
            ),
          ),
        ),
      ).join(' ')}
      {...others}
    >
      {children}
    </button>
  )
}
