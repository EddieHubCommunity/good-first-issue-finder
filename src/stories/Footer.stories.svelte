<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Footer from '$lib/components/footer.svelte';
  import { setContext } from 'svelte';
  import { versionKey } from '../lib/util/version';

  setContext(versionKey, '1.0.0');
</script>

<Meta title="Composed/Footer" component={Footer} />

<Story name="Default">
  <Footer />
</Story>
