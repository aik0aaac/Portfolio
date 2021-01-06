<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class ErrorPage extends Vue {
  /**
   * ページ名定義
   */
  public static layout = 'empty'

  @Prop({ default: null })
  error?: Object

  /**
   * エラ〜メッセージ: 404
   */
  private pageNotFound = '404 Not Found'

  /**
   * エラ〜メッセージ: Other Error
   */
  private otherError = 'An error occurred'

  head() {
    const title =
      (this.error as any).statusCode === 404
        ? this.pageNotFound
        : this.otherError
    return {
      title,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
