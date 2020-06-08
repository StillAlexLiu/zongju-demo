<template>
    <div class='CenterBlockInfo'>
        <ContainerBottom class="full text-center fl">
            <div><span class="name">{{data.name}}</span>
                <span class="number-font">{{data.value}}</span>
                <span class="unit-font">{{data.unit}}</span></div>
        </ContainerBottom>
    </div>
</template>

<script>
export default {
  name: 'CenterBlockInfo',
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

<style scoped lang="less">
.CenterBlockInfo {

    .fl {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .name {
        font-size: 16px;
    }
}
</style>
