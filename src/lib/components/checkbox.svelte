<script lang="ts">
  export let label: string;
</script>

<div class="flex items-center">
  <input id={label} class="absolute opacity-0" type="checkbox" />
  <label for={label} class="before:default-transition flex items-center">{label}</label>
</div>

<style lang="postcss">
  label::before {
    @apply mr-2 h-4 w-4 rounded-sm;
    content: '';
  }

  label:hover::before,
  input[type='checkbox']:hover + label::before {
  }

  input[type='checkbox']:focus + label::before {
    @apply ring-2 ring-blue-500;
  }

  input[type='checkbox']:checked + label::before {
    @apply flex items-center justify-center bg-[#1976d2] text-white;
    content: '\002714';
  }
</style>
