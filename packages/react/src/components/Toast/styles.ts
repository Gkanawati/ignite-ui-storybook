import { keyframes, styled } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  fontFamily: '$default',
  padding: '$3 $4',
  backgroundColor: '$gray800',
  color: '$gray100',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$1',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  all: 'unset',
  position: 'absolute',

  top: '$4',
  right: '$4',

  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: 390,
  maxWidth: '100vw',
  listStyle: 'none',
  padding: VIEWPORT_PADDING,
  outline: 'none',
  zIndex: 9999,

  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
