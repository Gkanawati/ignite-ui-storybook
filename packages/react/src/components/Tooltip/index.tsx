import { ComponentProps } from '@stitches/react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipContainer, TooltipArrow } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  as?: React.ElementType
  content: string | React.ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContainer>
            <TooltipArrow />

            {content}
          </TooltipContainer>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
