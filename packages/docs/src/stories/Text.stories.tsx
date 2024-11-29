import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-gk/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae in assumenda velit fugiat laboriosam aut aliquam ullam animi. Obcaecati dicta assumenda, odit possimus voluptatem repellat. Quidem odit architecto autem exercitationem.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}