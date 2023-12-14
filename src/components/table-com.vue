<template>
  <div class="chart">
    <p class="chart-title" align="center">{{ props.chartTitle }}</p>
    <table class="table" cellspacing="0">
      <tr
        v-for="(item, index) in props.chartData"
        :key="item"
        class="col"
        :class="!index ? 'first-line' : ''"
      >
        <td
          v-for="child in item"
          :key="child"
          class="row"
          align="center"
          v-html="child"
        ></td>
      </tr>
    </table>
  </div>
</template>
<script setup>
const props = defineProps(["chartTitle", "chartData"]);
</script>
<style scoped>
td {
  border: 1px black solid;
}
.first-line {
  background: rgba(0, 0, 255, 0.3);
}
.table {
  width: 50vw;
}
</style>