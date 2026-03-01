import {cn} from '@/lib/utils'

type BadgeProps={
    children: React.ReactNode,
    variant?: 'default'|'light'|'outline',
    className?: string
}

export function Badge(
    {
        children,
        variant='default',
        className
    } : BadgeProps
) {
    const variants = {
        default: 'bg-brand/15 border border-brand/30 text-brand',
        light: 'bg-white/15 border border-white/25 text-white',
        outline: 'bg-transparent border border-brand text-brand'
    }

    return (
        <span className={cn(
            'inline-flex items-center gap-2',
            'px-4 py-1.5 rounded-full',
            'text-xs font-bold tracking-widest uppercase',
            variants[variant],
            className
        )}>
            {children}
        </span>
    )
}