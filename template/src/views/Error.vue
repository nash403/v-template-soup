<template>
  <h1>{{#i18n}}\{{ $t('ERROR_TITLE') }}{{else}}Error{{/i18n}}</h1>
</template>

<script>
export default {
  name: 'Error'
}
</script>
