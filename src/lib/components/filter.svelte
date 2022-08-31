<script lang="ts">
  import { selectedLabels } from '$lib/stores/selected-labels.store';
  export let tags: string[];
  export let lang: any[];
  let selection: string[] = [];
  let languageList: string[] = [];

  // Null values check.
  lang.map((language) =>
    language.node.repository.primaryLanguage !== null
      ? languageList.push(language.node.repository.primaryLanguage.name)
      : '',
  );
  // Using a Set.
  languageList = Array.from(new Set(languageList));

  $: selection, run();
  const run = () => {
    selectedLabels.set(selection);
  };
</script>

<div class="mt-4 text-center">
  {#each tags as tag}
    <input class="hidden" value={tag} bind:group={selection} type="checkbox" id={tag} />
    <label
      class="my-1 mr-2 inline-block cursor-pointer select-none rounded-xl border-[1px] border-gray-500 py-1 px-2 text-sm transition-all duration-200"
      for={tag}>{@html tag}</label
    >
  {/each}
  {#each languageList as langList}
    <input class="hidden" value={langList} bind:group={selection} type="checkbox" id={langList} />
    <label
      class="my-1 mr-2 inline-block cursor-pointer select-none rounded-xl border-[1px] border-gray-500 py-1 px-2 text-sm transition-all duration-200"
      for={langList}>{@html langList}</label
    >
  {/each}
</div>

<style lang="postcss">
  input:checked + label {
    @apply border-skin-primary bg-skin-primary text-white;
  }
</style>
