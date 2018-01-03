<template>
  <h1>{{#i18n}}\{{ $t('NOT_FOUND_TITLE') }}{{else}}Not Found{{/i18n}}</h1>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
