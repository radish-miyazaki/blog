<template>
  <div>
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto"
      flat
      max-width="640"
    >
      <v-card-title class="text-center pa-8">
        <h3>投稿画面</h3>
      </v-card-title>
      <v-divider />
      <div class="pt-6">
        <div>
          <v-text-field
            dense
            height="48px"
            outlined
            class="mb-2"
            label="タイトル"
          ></v-text-field>
          <v-textarea
            label="本文"
            dense
            outlined
            height="150px"
          ></v-textarea>

        </div>
        <div class="pb-8">
          <v-btn
            color="primary"
            depressed
            height="48px"
            tile
            class="font-weight-bold"
          >
            投稿する
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
name: "Blog"
}
</script>

<style scoped>

</style>
