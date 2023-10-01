<a
  href="https://graphql.org/"
  class="card relative z-10 flex min-h-[250px] w-full max-w-[300px] flex-col items-center justify-center gap-4 justify-self-center overflow-hidden rounded-2xl bg-skin-off-background shadow-xl"
>
  <svg
    class="h-auto w-14"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="#e10098"
    role="img"
    aria-label="graphql icon"
  >
    <title>GraphQL</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z"
    /><circle cx="50" cy="9.3209" r="8.82" /><circle cx="85.2292" cy="29.6605" r="8.82" /><circle
      cx="85.2292"
      cy="70.3396"
      r="8.82"
    /><circle cx="50" cy="90.6791" r="8.82" /><circle cx="14.7659" cy="70.3396" r="8.82" /><circle
      cx="14.7659"
      cy="29.6605"
      r="8.82"
    /></svg
  >
  <div class="flex flex-col items-center justify-center gap-4 transition duration-200">
    <h3 class="text-xl font-bold text-skin-text-highlight">GraphQL</h3>
    <p class="px-8 text-center">a query and manipulation language for APIs</p>
  </div>
</a>

<style lang="postcss">
  .card:hover::before {
    @apply absolute -z-10 h-[500px] w-[100px] bg-[#e535ab];
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

  svg {
    fill: color(display-p3 0.8824 0 0.5961);
  }
</style>
