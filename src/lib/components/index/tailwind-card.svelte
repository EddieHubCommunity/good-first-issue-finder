<a
  href="https://tailwindcss.com/"
  class="card relative z-10 flex min-h-[250px] w-full max-w-[300px] flex-col items-center justify-center gap-4 justify-self-center overflow-hidden rounded-2xl bg-skin-off-background shadow-xl"
>
  <svg
    id="Layer_1"
    class="h-14 w-14"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 73.29"
    role="img"
    aria-label="svelte icon"
    ><defs
      ><style>
        .cls-1 {
          fill: #06b6d4;
          fill-rule: evenodd;
        }
      </style></defs
    ><title>tailwind-css</title><path
      class="cls-1"
      d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
    /></svg
  >
  <div class="flex flex-col items-center justify-center gap-4 transition duration-200">
    <h3 class="text-xl font-bold text-skin-text-highlight">Tailwind</h3>
    <p class="px-8 text-center">a utility-first CSS framework for building user interfaces</p>
  </div>
</a>

<style lang="postcss">
  .card:hover::before {
    @apply absolute -z-10 h-[500px] w-[100px] bg-[#06b6d4];
    content: '';
    animation: animate-circle 5s linear infinite;
  }

  .card:hover::after {
    @apply absolute inset-1 -z-10 rounded-2xl bg-skin-off-background;
    content: '';
  }

  @keyframes animate-circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
