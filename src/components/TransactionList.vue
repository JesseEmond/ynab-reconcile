<template>
  <div>
    <md-table id="transactions" md-card
      v-if="transactions.length"
      v-model="transactions" :md-selected-value.sync="selected">
      <md-table-toolbar>
        <h1 class="md-title">Transactions to reconcile</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }"
        md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Payee">{{ item.payee_name }}</md-table-cell>
        <md-table-cell md-label="Date">{{ formatDate(item.date) }}</md-table-cell>
        <md-table-cell md-label="Amount">
          <currency :initialValue="item.amount"></currency>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-empty-state v-else
      class="md-primary" md-icon="done" md-label="No transactions to reconcile"
      md-description="New transactions you add will show up here.">
    </md-empty-state>
  </div>
</template>

<script>
const ynabApi = require("ynab");
import Currency from './Currency'

export default {
  name: 'TransactionList',
  props: {
    cleared: Array,
    uncleared: Array,
  },
  components: { Currency },
  data() {
   return {
    transactions: [],
    selected: [],
   }
  },
  watch: {
    selected(value) {
      this.$emit('selected', value)
    },
    immediate: true,
  },
  created() {
    // TODO: add support for uncleared transactions
    this.transactions = [...this.cleared]
    this.selected = [...this.cleared]
  },
  methods: {
    formatDate(dateStr) {
      // TODO: use YNAB locale
      const date = ynabApi.utils.convertFromISODateString(dateStr)
      const options = { day: "numeric", month: "short" }
      const format = new Intl.DateTimeFormat('en-US', options)
      return format.format(date)
    },
  },
}
</script>

<style lang="scss">
#transactions {
  .md-table-head-label, .md-table-cell-container {
    padding-left: 4px;
    padding-right: 4px;
  }
  margin: 0;
}
</style>
<style lang="scss" scoped>
.md-table-toolbar {
  text-align: center;  
}
.md-empty-state {
  height: 40vh;
}
</style>