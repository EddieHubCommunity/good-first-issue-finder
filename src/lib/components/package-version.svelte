<script lang="ts">
  import { getContext } from 'svelte';
  import { versionKey } from '$lib/util/version';

  const version = getContext(versionKey);
</script>

<div>
  v{version}
</div>
