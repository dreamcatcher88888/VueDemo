<template>
<vheader></vheader>

</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Navtop'
  import Maincontent from '@/components/Main'
  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'vheader': Header,
      'maincontent': Maincontent
    }
  }
</script>
