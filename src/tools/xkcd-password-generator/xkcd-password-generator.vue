<script setup lang="ts">
import { generateWords } from './generate-xkcd';
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useCopy } from '@/composable/copy';

const [password, refreshWords] = computedRefreshable(() => String(generateWords()));

const { copy } = useCopy({ source: password, text: 'Password copied to the clipboard' });
</script>

<template>
  <c-card>
    <div class="password">
      {{ password }}
    </div>
    <div flex justify-center gap-3>
      <c-button @click="copy()">
        Copy
      </c-button>
      <c-button @click="refreshWords">
        Refresh
      </c-button>
    </div>
  </c-card>
</template>

<style lang="less" scoped>
.password {
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  margin: 10px 0 25px;
}
</style>
