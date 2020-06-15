<template>
    <div class='Roll-bg-no-scoped'>
        <!--        {{data.type}}-->
        <img class="" :src="data.img" alt="" :style="{animation:data.type+' '+data.time+'s linear infinite'}"/>
    </div>
</template>

<script>
export default {
  name: 'Roll',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style  lang="less">
.Roll-bg-no-scoped {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        /*animation: roll 20s linear infinite;*/
    }

    @keyframes roll {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes back {
        from {
            -webkit-transform: rotate(360deg);
        }
        to {
            -webkit-transform: rotate(0deg);
        }
    }
}

</style>
