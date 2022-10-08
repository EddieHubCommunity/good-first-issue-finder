<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Card from '$lib/components/card.svelte';
</script>

<Meta title="Card" component={Card} />

<!-- Dynamic snippet should be disabled for this story -->
<Story
  argTypes={{
    class: {
      description: 'CSS classes that are applied to the card',
      name: 'class',
      type: 'string',
    },
  }}
  name="Regular Card"
>
  <Card>This is a regular card component</Card>
</Story>
