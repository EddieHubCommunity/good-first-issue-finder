<script lang="ts">
  export let href: string;
  export let variant: 'primary' | 'secondary' = 'primary';

  const variantMap = {
    primary: 'bg-skin-primary',
    secondary: 'border border-px border-skin-primary',
  };
</script>

<a {href} class="rounded-lg {variantMap[variant]} px-4 py-2">
  <slot />
</a>
