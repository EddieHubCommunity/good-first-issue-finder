<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Label from '$lib/components/label.svelte';
</script>

<Meta title="Label" component={Label} />

<Template let:args>
  <Label {...args} />
</Template>

<Story
  name="Regular"
  argTypes={{
    text: { type: 'string', name: 'text', description: 'Text displayed inside the component' },
    color: {
      type: 'string',
      description: 'Hex Value of the background color',
      control: 'color',
    },
  }}
  args={{ color: '#f64334', text: 'Hello World' }}
/>
