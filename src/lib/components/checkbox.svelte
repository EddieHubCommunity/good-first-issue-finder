<script lang="ts">
  export let label: string;
  export let value: string;
  export let group: string[];
  export let checked = false;

  $: updateChekbox(group);
  $: updateGroup(checked);

  function updateChekbox(group: string[]) {
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
  <input
    bind:checked
    {value}
    id={label}
    class="absolute cursor-pointer opacity-0"
    type="checkbox"
  />
  <label for={label} class="flex cursor-pointer items-center whitespace-nowrap">{label}</label>
</div>

<style lang="postcss">
  label::before {
    @apply mr-2 h-4 w-4 rounded-sm border border-gray-500;
    content: '';
  }

  label:hover::before,
  input[type='checkbox']:hover + label::before {
    @apply cursor-pointer;
  }

  input[type='checkbox']:focus + label::before {
    @apply ring-2 ring-blue-500;
  }

  input[type='checkbox']:checked + label::before {
    @apply flex items-center justify-center bg-skin-primary text-white;
    content: '\002713';
  }
</style>
