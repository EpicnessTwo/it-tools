<script setup lang="ts">
import JSON5 from 'json5';
import { convertArrayToPhp } from './json-to-php-array.service';
import type { UseValidationRule } from '@/composable/validation';
import { withDefaultOnError } from '@/utils/defaults';

const indentSize = useStorage('json-to-php-array:indent-size', 4);

function transformer(value: string) {
  return withDefaultOnError(() => {
    if (value === '') {
      return '';
    }
    return convertArrayToPhp({ array: JSON5.parse(value) }, { indentSize });
  }, '');
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: 'Provided JSON is not valid.',
  },
];
</script>

<template>
  <div style="flex: 0 0 100%">
    <div style="margin: 0 auto; max-width: 600px" flex justify-center gap-3>
      <n-form-item label="Indent size :" label-placement="left" label-width="100" :show-feedback="false">
        <n-input-number v-model:value="indentSize" min="0" max="10" style="width: 100px" />
      </n-form-item>
    </div>
  </div>

  <format-transformer
    input-label="Your raw JSON"
    input-placeholder="Paste your raw JSON here..."
    output-label="PHP Array version of your JSON"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
