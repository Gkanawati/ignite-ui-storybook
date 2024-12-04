import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui-gk/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip'
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '$12 $20' }}>
          <Story />
        </Box>
      )
    }
  ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}