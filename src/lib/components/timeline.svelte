<script lang="ts">
  export let changes: string[];
</script>

<ol class="text-p-large flex flex-col text-sm">
  {#each changes as change}
    <li class="relative flex pb-8">
      <div class="absolute inset-0 flex h-full w-3 items-center justify-center">
        <div class="pointer-events-none h-full border-[0.5px] border-skin-text-highlight" />
      </div>
      <div
        class="relative z-10 inline-flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-skin-primary"
      />
      <div class="flex-grow pl-4">
        {@html change}
      </div>
    </li>
  {/each}
</ol>
