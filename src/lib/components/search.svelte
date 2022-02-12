<script lang="ts">
  export let searchTerm: string;
</script>

<input
  on:change
  on:keyup
  class="rounded-xl py-2 px-4 leading-4 shadow-standard"
  bind:value={searchTerm}
  type="search"
  placeholder="Search..."
/>
