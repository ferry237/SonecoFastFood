"use client"
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import classNames from 'classnames'

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

const CustomLinkComponent = ({
  href,
  children,
  className,
  ...props
}: CustomLinkProps) => {
  // classes de base
  const defaultClasses = `
    relative inline-block
    text-[var(--color-secondary)] font-[montserrat]
    font-light
    transition-colors duration-200
    hover:text-amber-200
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[0.1rem] after:bg-amber-200 after:transition-all after:duration-300
    hover:after:w-full
    before:content-[''] before:absolute before:left-0 before:-bottom-2
    before:w-0 before:h-[0.1rem] before:bg-amber-200 before:transition-all before:duration-300
    hover:before:w-full
  `

  const finalClasses = classNames(defaultClasses, className)

  return (
    <Link href={href} className={finalClasses} {...props}>
      {children}
    </Link>
  )
}

export default CustomLinkComponent
