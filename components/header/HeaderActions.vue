<template>
  <ClientOnly>
    <Teleport to="#actions">
      <div class="flex gap-2 items-center justify-end text-xl">
        <slot>
          <NuxtLink>
            <IconCart />
          </NuxtLink>
          <NuxtLink>
            <IconUser />
          </NuxtLink>
        </slot>
      </div>
    </Teleport>
  </ClientOnly>
</template>
