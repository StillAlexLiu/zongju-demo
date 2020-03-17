<template>
    <div class="Container">
        <div class="main">
            <div class="title">
                <div class="text">{{title}}</div>
                <div class="slot">
                    <slot name="title"/>
                </div>
            </div>
            <div class="body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@TitleHeight: 31px;
@point: linear-gradient(0, #8D9FBD 0%, #8D9FBD 100%);
@line: linear-gradient(270deg, rgba(160, 180, 205, 0.24) 0%, rgba(103, 125, 159, 0.63) 100%);
.Container {
    padding: 5px 10px;

    .main {
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(49, 58, 88, 1) 0%, rgba(46, 54, 85, 1) 100%);
        padding: 10px 10px 5px 10px;

        .title {
            height: @TitleHeight;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            background: @point 0 0 no-repeat, @point 100% 0 no-repeat, @point 0 100% no-repeat, @point 100% 100% no-repeat, @line 5px 2px no-repeat, @line 5px calc(~"100% - 2px") no-repeat, linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.365) 100%) center no-repeat;
            background-size: 5px 5px, 5px 5px, 5px 5px, 5px 5px, calc(~"100% - 10px") 1px, calc(~"100% - 10px") 1px, calc(~"100% - 4px") calc(~"100% - 4px");

            .text {
                text-indent: 14px;
                font-size: 18px;
                line-height: @TitleHeight;
            }

            .slot {
                padding: 3px 5px;

                > * {
                    height: 100%;
                }
            }

            > div {
                flex-basis: auto;
            }
        }

        .body {
            margin-top: 3px;
            height: calc(-@TitleHeight + ~"-3px + 100%");
        }
    }

}
</style>
