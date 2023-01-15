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
  class="relative rounded-lg bg-skin-primary py-2 px-4 text-white shadow-lg transition duration-200 hover:shadow-primary-hover {variantMap[
    variant
  ]}"
>
  <slot />
</a>
