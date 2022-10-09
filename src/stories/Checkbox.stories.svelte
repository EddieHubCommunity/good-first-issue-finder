<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

  import Checkbox from '$lib/components/checkbox.svelte';
</script>

<Meta title="Checkbox" component={Checkbox} />

<Template let:args>
  <Checkbox {...args} />
</Template>

<Story
  args={{
    label: 'Checkbox 1',
    value: 'checkbox1',
    checked: false,
    group: [],
  }}
  argTypes={{
    label: {
      description: 'Label of the checkbox',
      name: 'label',
      type: 'string',
    },
    value: {
      description: 'The value that is returned when the checkbox is checked',
      name: 'value',
      type: 'string',
    },
    checked: {
      description: 'Flag if the Checkbox is checked',
      name: 'checked',
      type: 'boolean',
      control: 'boolean',
    },
    group: {
      name: 'group',
      description: 'Array of selected values inside the same group of checkboxes',
    },
  }}
  name="Default Checkbox"
/>
