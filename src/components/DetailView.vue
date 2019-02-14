<template>
  <div  class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="cat.url" />
      </div>
      <div class="info">
        <span>{{ cat.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8col-tablet">
      <div class="comment">
        <span>{{ cat.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { find } from 'lodash'
  export default{
    data () {
      return {
        cat: {
          url: 'static/img/icons/cropchat-icon-256x256.png'
        }
      }
    },
    mounted () {
      this.cat = find(this.$root.cat, (cat) => cat['.key'] === this.$route.params.id)
      if(this.cat == null){
        this.cat = {
          url: 'static/img/icons/cropchat-icon-256x256.png',
          comment: '404: Cat Not Found',
          info: 'Nothing Here'
        }
      }
    }
  }
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>