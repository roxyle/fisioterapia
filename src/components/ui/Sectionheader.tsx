import {cn} from '@/lib/utils'

type SectionHeaderProps ={
    label?:string,
    title: string,
    sub?:string,
    center?:boolean,
    light?: boolean,
    className?: string
}

export function SectionHeader(
    {
        label,
        title,
        sub,
        center=false,
        light=false,
        className
    } : SectionHeaderProps
) {
    return (
        <div className={cn(
            'mb-8 md:mb-10',
            center && 'text-center',
            className
        )}>

            {label && (
                <p className={cn(
                    'section-label mb-2',
                    light && 'text-sky-300'
                )}>

                    {label}

                </p>
            )}

            <h2 className={cn(
                'section-title',
                light && 'text-white'
            )}>
                {title}
            </h2>

            {
                sub && (
                    <p className={cn(
                        'section-sub mt-3 max-w-2xl',
                        center && 'mx-auto',
                        light && 'text-sky-100/70'
                    )}>
                        {sub}
                    </p>
                )
            }

        </div>
    )
}