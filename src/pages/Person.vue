<template>
  <q-page class="q-pa-md">
    <q-card class="profile" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-4">
          <q-img :src="this['persons/getPerson'].img" />
        </q-card-section>

        <q-separator vertical />

        <q-card-section style="width: 100%;">
          <div class="row">
            <div class="label">Name:</div>
            <div class="text">{{ this["persons/getPerson"].name }}</div>
          </div>
          <q-separator horizontal />
          <div class="row">
            <div class="label">Phone:</div>
            <a :href="'tel:' + this['persons/getPerson'].phone" class="text">{{
              this["persons/getPerson"].phone
            }}</a>
          </div>
          <q-separator horizontal />
          <div class="row">
            <div class="label">Email:</div>
            <a
              :href="'mailto:' + this['persons/getPerson'].email"
              class="text"
              >{{ this["persons/getPerson"].email }}</a
            >
          </div>
          <q-separator horizontal />
          <div class="row">
            <div class="label">Birth:</div>
            <div class="text">{{ this["persons/getPerson"].birth }}</div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
    <div class="row flex flex-center">
      <q-btn
        class="q-mt-xl "
        color="blue"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Person",
  computed: {
    ...mapGetters(["persons/getPerson"])
  },
  methods: {
    ...mapActions(["persons/setPerson"])
  },
  mounted() {
    this["persons/setPerson"](this.$route.params.id).then(data => {
      if (data === 404) this.$router.push({ name: "404" });
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  width: 100%;
}

.text,
.label {
  display: block;
  width: 100%;
}

.text {
  font-size: 20px;
  font-weight: 300;
  padding: 5px 15px;
  color: black;
  text-decoration: none;
}

a.text:hover {
  color: #1976d2;
}

.label {
  font-size: 14px;
  color: #6d6d6d;
  padding-top: 8px;
}
</style>
