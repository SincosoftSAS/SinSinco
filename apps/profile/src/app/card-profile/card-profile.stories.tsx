import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardProfile } from './card-profile';

export default {
  component: CardProfile,
  title: 'CardProfile',
} as ComponentMeta<typeof CardProfile>;

const Template: ComponentStory<typeof CardProfile> = (args) => (
  <CardProfile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
