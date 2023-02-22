<script lang="ts">
  export let changes: string[];
</script>

<ol class="text-p-large flex flex-col text-sm">
  {#each changes as change}
    <li class="relative flex h-12">
      <div class="absolute inset-0 flex h-full w-3 items-center justify-center">
        <div class="pointer-events-none h-full border-[0.5px] border-skin-text-highlight" />
      </div>
      <div
        class="absolute top-0 left-0 bottom-0 right-0 z-10 my-auto inline-flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-skin-primary"
      />
      <div class="flex flex-grow items-center pl-5">
        {@html change}
      </div>
    </li>
  {/each}
</ol>
