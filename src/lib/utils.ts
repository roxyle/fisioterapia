import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility per combinare classi Tailwind in modo sicuro.
 * Risolve i conflitti (es. "p-4 p-6" -> "p-6") e
 * supporta classi condizionali tramite clsx.
 *
 * Uso:
 *   cn('base-class', condition && 'conditional-class', 'altro')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}