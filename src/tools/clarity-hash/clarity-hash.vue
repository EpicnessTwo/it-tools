<script setup lang="ts">
import type { lib } from 'crypto-js';
import { SHA256, enc } from 'crypto-js';

import InputCopyable from '../../components/InputCopyable.vue';
import { convertHexToBin } from './clarity-hash.service';

const algos = {
  SHA256,
} as const;

type AlgoNames = keyof typeof algos;
type Encoding = keyof typeof enc | 'Bin';
const algoNames = Object.keys(algos) as AlgoNames[];
const encoding = { defaultValue: 'Hex', name: 'encoding' };
const clearText = ref('admin@example.com');

function formatWithEncoding(words: lib.WordArray, encoding: Encoding) {
  return words.toString(enc[encoding]);
}

const hashText = (algo: AlgoNames, value: string) => formatWithEncoding(algos[algo]('"'+value+'"'), encoding.value);
</script>

<template>
  <div>
    <c-card>
      <c-input-text v-model:value="clearText" raw-text placeholder="admin@example.com" rows="1" autosize autofocus label="Please enter your email:" />

      <n-divider />

      <div v-for="algo in algoNames" :key="algo" style="margin: 5px 0">
        <n-input-group>
          <InputCopyable :value="hashText('SHA256', clearText)" readonly />
        </n-input-group>
      </div>
    </c-card>
  </div>
</template>
