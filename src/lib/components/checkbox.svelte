<script lang="ts">
  import { Checkbox } from 'radix-svelte';
  export let label: string;
  export let value: string;
  export let group: string[] = [];
  export let checked = false;

  export let disabled = false;
  export let required = false;
  export let name = '';
  export let id = '';

  $: updateCheckbox(group);
  $: updateGroup(checked);

  function updateCheckbox(group: string[]) {
    checked = group.indexOf(value) >= 0;
  }

  function updateGroup(checked: boolean) {
    const index = group.indexOf(value);
    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
</script>

<div class="flex items-center">
  <Checkbox.Root
    class="flex h-4 w-4 appearance-none items-center
    justify-center rounded-sm border border-gray-500 bg-white
    shadow-lg outline-none focus:ring focus:ring-black data-[state=checked]:bg-primary-100 data-[state=checked]:text-white"
    {disabled}
    bind:checked
    {name}
    {value}
    {required}
    id={id || label}
  >
    <Checkbox.Indicator>&#10003</Checkbox.Indicator>
  </Checkbox.Root>
  <label class="flex cursor-pointer items-center whitespace-nowrap pl-4" for={id || label}>
    {label}
  </label>
</div>
