<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { setContext } from 'svelte';

  import Version from '../lib/components/package-version.svelte';

  import { versionKey } from '../lib/util/version';

  setContext(versionKey, '1.0.0');
</script>

<Meta title="Version" component={Version} />

<Template let:args>
  <Version {...args} />
</Template>

<Story name="Default" />
