//Button renderizza un <button> HTML, lo uso per azioni come submit del form

import {cn} from '@/lib/utils'

type Variant = "primary"|"outline"|"ghost"|"white"|"outline-white"
type Size ="sm"|"md"|"lg"

type ButtonProps= {
    variant?: Variant,
    size?: Size,
    className?: string,
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variants: Record<Variant, string> = {
    primary: 'bg-brand text-white hover:bg-brand-dark shadow-sky',
    outline: 'border-2 border-brand text-brand hover:bg-brand-pale',
    ghost: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    white: 'bg-white text-brand-darker hover:bg-sky-50 shadow-card',
    "outline-white": 'border border-white/40 text-white bg-white/10 hover:bg-white/20'
}

const sizes: Record<Size, string> ={
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-7 py-3.5 text-base font-semibold'
}

export function Button (
    {
        variant ='primary',
        size='md',
        className,
        children,
        ...props

    } : ButtonProps 
)
    {
        return (
            <button className={
                cn(
                    'inline-flex items-center justify-center gap-2',
                    'rounded-xl transition-all duration-200',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    className
                )
            }
            {...props}
            >

            {children}

            </button>
        )
    }

//LinkButton renderizza un <a>, lo uso per navigazione e link esterni come "Chiama Ora" o "Scopri i Servizi"

type LinkButtonProps={
    variant?: Variant,
    size?:Size,
    className?:string,
    children:React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function LinkButton(
    {
        variant= 'primary',
        size='md',
        className,
        children,
        ...props
    }: LinkButtonProps
) {
    return (
        <a className={cn(
            'inline-flex items-center justify-center gap-2',
            'rounded-xl transition-all duration-200',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
            variants[variant],
            sizes[size],
            className
        )}
        {...props}>
            {children}
        </a>
    )
}

