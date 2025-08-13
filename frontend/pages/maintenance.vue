<script setup lang="ts">
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
  const siteTitle = import.meta.env.SITE_TITLE || "HomeBox";

  definePageMeta({
    middleware: ["auth"],
  });
  useHead({
    title: siteTitle + " | " + t("menu.maintenance"),
  });
</script>

<template>
  <div>
    <BaseContainer class="flex flex-col gap-4">
      <BaseSectionHeader> {{ $t("menu.maintenance") }} </BaseSectionHeader>
      <MaintenanceListView></MaintenanceListView>
    </BaseContainer>
  </div>
</template>
