import Link from 'next/link'
import React from 'react'

export default function MyLinks({ href, children, ...props}) {
  return (
    <Link href={href} {...props}>
        <a>{children}</a>
    </Link>
  )
}
