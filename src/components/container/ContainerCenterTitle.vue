<template>
    <div class="Container">
        <div class="main">
            <div class="title" v-if="title!==''">
                <div class="slot">
                    <slot name="title-left"/>
                </div>
                <div class="text">{{title}}</div>
                <div class="slot">
                    <slot name="title-right"/>
                </div>
            </div>
            <div class="body" :style="{height:title===''?'100%':''}">
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
@TitleHeight: 35px;
@point: linear-gradient(0, #8D9FBD 0%, #8D9FBD 100%);
@line: linear-gradient(270deg, rgba(160, 180, 205, 0.24) 0%, rgba(103, 125, 159, 0.63) 100%);
@BgColor: linear-gradient(180deg, rgba(32, 35, 58, .5) 0%, rgba(36, 41, 66, .5) 100%);
@LeftLine: url("./img/left-line.png");
@RightLine: url("./img/right-line.png");
@BottomLine: url("./img/bottom-line.png");
@TopLeft: url("./img/top-left.png");
@TopRight: url("./img/top-right.png");
@BottomLeft: url("./img/bottom-left.png");
@BottomRight: url("./img/bottom-right.png");
.Container {
    padding: 5px 5px;

    .main {
        height: 100%;
        width: 100%;
        /*background: linear-gradient(180deg, #20233A 0%, #242942 100%);*/
        /*background: linear-gradient(180deg, rgba(32, 35, 58, .5) 0%, rgba(36, 41, 66, .5) 100%);*/
        /*background:linear-gradient(180deg,rgba(32,35,58,1) 0%,rgba(36,41,66,1) 100%);*/
        background: @BgColor, @LeftLine 0 center no-repeat, @RightLine 100% center no-repeat, @BottomLine center 100% no-repeat, @TopLeft 0 0 no-repeat, @TopRight 100% 0 no-repeat, @BottomLeft 0 100% no-repeat, @BottomRight 100% 100% no-repeat;
        background-size: 100% 100%, 24px calc(100% - 56px), 24px calc(100% - 56px), calc(100% - 140px) 14px, 20px 17px, 20px 17px, 20px 17px, 20px 17px;

        .title {
            height: @TitleHeight;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            background-image: url("./img/title.png");
            background-size: 268px 35px;
            background-position: center 0;
            background-repeat: no-repeat;
            /*            background: @point 0 0 no-repeat, @point 100% 0 no-repeat, @point 0 100% no-repeat, @point 100% 100% no-repeat, @line 5px 2px no-repeat, @line 5px calc(~"100% - 2px") no-repeat, linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.365) 100%) center no-repeat; */
            /*            background-size: 5px 5px, 5px 5px, 5px 5px, 5px 5px, calc(~"100% - 10px") 1px, calc(~"100% - 10px") 1px, calc(~"100% - 4px") calc(~"100% - 4px"); */

            .text {
                text-indent: 14px;
                font-size: 22px;
                line-height: 32px;
                font-family: 'siyuan';
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
            height: calc(-@TitleHeight + ~"-3px + 100%");
            padding: 0 10px 5px 10px;
        }
    }

}
</style>
