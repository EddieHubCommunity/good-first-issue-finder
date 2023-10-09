<script lang="ts">
  export let href: string;
  export let variant: 'primary' | 'secondary' = 'primary';

  const variantMap = {
    primary: 'bg-skin-primary',
    secondary: 'border border-px border-skin-primary',
  };
</script>

<a
  {href}
  class="relative rounded-lg bg-skin-primary px-4 py-2 text-white shadow-lg transition duration-200 hover:shadow-primary-hover {variantMap[
    variant
  ]}"
>
  <slot />
</a>
