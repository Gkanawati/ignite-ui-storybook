import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-gk/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>

          <Text size='sm'>Observation</Text>
          <Story />
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation'
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
    disabled: true,
  }
}