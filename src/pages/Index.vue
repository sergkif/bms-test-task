<template>
  <q-page class="q-pa-md">
    <div class="row" wrap>
      <div class="col">
        <q-input v-model="name" label="Name" />
      </div>
      <div class="col">
        <q-input v-model="phone" label="Phone" />
      </div>
      <div class="col">
        <q-input v-model="email" label="Email" />
      </div>
      <div class="col">
        <q-input v-model="birth" label="Birth" />
      </div>
      <div class="col btn self-center">
        <q-btn
          push
          color="primary"
          round
          icon="search"
          @click="search"
          :disable="
            !(
              name.length > 0 ||
              email.length > 0 ||
              phone.length > 0 ||
              birth.length > 0
            )
          "
        />
      </div>
    </div>
    <q-table
      title="Persons"
      :data="this['persons/getPersonList']"
      :columns="columns"
      row-key="name"
      no-data-label="I didn't find anything for you"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <div
              class="name"
              v-if="col.name === 'Name'"
              @click="openPerson(props.row._id)"
            >
              {{ col.value }}
            </div>
            <div v-else>{{ col.value }}</div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PageIndex",
  computed: {
    ...mapGetters(["persons/getPersonList"])
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      birth: "",
      columns: [
        { name: "Name", label: "Name", field: "name", align: "left" },
        { name: "Phone", label: "Phone", field: "phone", align: "left" },
        { name: "Email", label: "Email", field: "email", align: "left" },
        { name: "Birth", label: "Birth", field: "birth", align: "left" }
      ]
    };
  },
  methods: {
    ...mapActions(["persons/setPersonList"]),

    search() {
      let params = {};
      Object.assign(params, this.name && { name: this.name });
      Object.assign(params, this.phone && { phone: this.phone });
      Object.assign(params, this.email && { email: this.email });
      Object.assign(params, this.birth && { birth: this.birth });
      this["persons/setPersonList"](params);
    },
    openPerson(id) {
      this.$router.push("/" + id);
    }
  },
  mounted() {
    this.search();
  },
  watch: {
    name(name) {
      if (name.length === 0) this.search();
    },
    phone(phone) {
      if (phone.length === 0) this.search();
    },
    email(email) {
      if (email.length === 0) this.search();
    },
    birth(birth) {
      if (birth.length === 0) this.search();
    }
  }
};
</script>

<style lang="scss" scoped>
.row > div {
  padding: 10px 15px;
  min-width: 200px;
}

.row {
  padding-bottom: 20px;
}

.btn {
  max-width: 80px;
  min-width: 80px !important;
  margin-bottom: 20px;
}

.name {
  cursor: pointer;

  &:hover {
    color: #1976d2;
  }
}
</style>
