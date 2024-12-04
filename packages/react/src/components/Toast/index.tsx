import { ComponentProps } from '@stitches/react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  as?: React.ElementType
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
