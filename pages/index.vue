<template>
  <v-container>
    <v-container>
      <v-text-field
        v-model="text"
      />
      <v-select
        v-model="targetLang"
        :items="lang"
        item-text="full"
        item-value="abbr"
      />
      <v-btn @click="onSubmit">Submit</v-btn>
    </v-container>
    {{ this.translation }}
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      lang: [
        { full: 'English', abbr: 'EN'},
        { full: 'German', abbr: 'DE'},
        { full: 'French', abbr: 'FR'},
        { full: 'Spanish', abbr: 'ES'},
        { full: 'Japanese', abbr: 'JA'},
        { full: 'Italian', abbr: 'IT'},
        { full: 'Polish', abbr: 'PL'},
        { full: 'Dutch', abbr: 'NL'}
      ],
      targetLang: '',
      text: '',
      translation: ''
    }
  },
  methods: {
    onSubmit: async function () {
      if (this.text.length > 0 && this.targetLang) {
        this.$axios.post('api/translate', {
          text: this.text,
          targetLang: this.targetLang
        })
          .then((res) => {
            this.translation = res.data
          })
          .catch((error) => {
            this.translation = error
          })

      }
    }
  }
}
</script>
