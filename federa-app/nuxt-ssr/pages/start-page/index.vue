<style lang="scss" scoped>
    .landing-page {
        background: url('~@/assets/bg/bg3.png') no-repeat;
        min-height: 849px;
        background-size: cover;

        .wrapper {
            display: flex;
            padding-top: 100px;
            justify-content: center;
            .left-side {
                .image-ads {
                    img:last-child {
                        position: relative;
                        left: -60px;
                    }
                }

                .downloads {
                    margin-top: 60px;
                    img {
                        width: 150px;
                        margin-left: 30px;
                    }
                }
            }
        }
    }
</style>

<script>
    import LoginForm from "./LoginForm"

    export default {
        layout(context) {
            return 'layout'
        },
        components: {
            LoginForm
        }
    }
</script>

<template>
    <div class="landing-page">
        <div class="wrapper">
            <div class="left-side">
                <div class="image-ads">
                    <img src="~/assets/images/img_listingtimeline.png" alt="">
                    <img src="~/assets/images/img_sellerdashboard.png" alt="">
                </div>

                <div class="downloads">
                    <img src="~/assets/images/AppStore.png" alt="">
                    <img src="~/assets/images/GooglePlay.png" alt="">
                </div>
            </div>
            <div class="right-side">
                <LoginForm/>
            </div>
        </div>
    </div>
</template>


