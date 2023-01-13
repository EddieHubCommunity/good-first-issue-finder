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
  class="relative rounded-lg bg-skin-primary py-2 px-4 text-white shadow-lg transition duration-200 {variantMap[
    variant
  ]}"
>
  <slot />
</a>

<style>
  a:hover {
    box-shadow: rgba(255, 90, 0, 0.5) 0px 1px 40px;
  }
</style>
