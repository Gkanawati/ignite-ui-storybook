import { useEffect, useRef, useState } from 'react'
import { Button, Toast, ToastProps } from '@ignite-ui-gk/react'
import { Meta, StoryObj } from '@storybook/react';

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const timeRef = useRef(0);

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current);
    }
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setIsOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 09 de Outubro às 16h',
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}