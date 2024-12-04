import { styled } from '../../styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(TooltipPrimitive.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  borderRadius: '$xs',
  fontWeight: '$medium',
  boxSizing: 'border-box',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})
