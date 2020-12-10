<style lang="scss">
.listing-consultation {
    padding: 33px 0 100px 0;
    text-align: center;
    font-family: 'SFUIText-Regular';

    @media only screen and (max-width: 767px) {
        .el-col-xs-12 {
            width: 100%;
        }
    }

    .header {
        margin-bottom: 45px;
        font-style: normal;
        font-weight: bold;
        font-size: 27px;
        line-height: 40px;
        text-align: center;
        color: #000000;
        max-width: 690px;
        margin: 0 auto;

        @media only screen and (max-width: 1205px) {
            margin-bottom: 40px;
            font-size: 25px;
            line-height: 30px;
        }

        @media only screen and (max-width: 765px) {
            margin-bottom: 18px;
            font-size: 18px;
            line-height: 25px;
        }
    }

    .one-consultation {
        .fedra-img {
            width:100px;
            height:100px;
            background-image:url("~assets/images/post-closing.png");
            background-repeat:no-repeat;
            background-size: 100px 100px;
            display: block;
            margin: 65px auto 15px;

            @media (max-width: 660px)
            {
                margin: 0px auto 15px;
                width:80px;
                height:80px;
                background-size: 80px 80px;
            }
        }

        .welcome {
            color: #868585;
            font-size: 20px;
            
        }
    }

    .detail-text-group {
        margin-top: 50px;
        @media (max-width: 375px)
        {
            margin-top: 15px;
        }

        .smart {
            font-size: 24px;
            font-weight: bold;

            @media (max-width: 375px)
            {
                font-size: 21px;
            }
        }

        .clock-bar {
            height:30px;
            background-image:url("~assets/images/clock.png");
            background-repeat:no-repeat;
            background-size: 24px 24px;
            margin: 35px 15px 0px 22px;
            display: flex;
            @media (max-width: 660px)
            {
                background-size: 20px 20px;
            }
            
            span {
                margin-left: 45px;
                color: #868585;
                line-height: 25px;
                font-size: 15px;
            }
        }

        .phone-call {
            height:30px;
            background-image:url("~assets/images/phone-call.png");
            background-repeat:no-repeat;
            background-size: 24px 24px;
            margin: 10px 15px 0px 22px;
            display: flex;
            @media (max-width: 375px)
            {
                background-size: 20px 20px;
            }
            span {
                margin-left: 45px;
                color: #868585;
                line-height: 25px;
                font-size: 15px;
            }
        }

        .text-end {
            margin-left: 24px;
            margin-top: 35px;
            text-align: left;
            font-size: 17px;
            span {
                color: #868585;
            }
        }
    }

    .calendar-wrapper {
        .title {
            margin-top: 65px;
            font-weight: bold;
            font-size: 24px;
            color: #000000;
            margin-bottom: 20px;
            text-align: center;
            margin-left: 15px;
            // @media (max-width: 375px)
            // {
            //     text-align: center;
            // }
            // @media (max-width: 768px)
            // {
            //     text-align: center;
            // }
        }

        .time-zone-bar {
            height:30px;
            background-image:url("~assets/images/earth.png");
            background-repeat:no-repeat;
            background-size: 25px 25px;
            margin: 35px 15px 0px 50px;
            display: flex;
            @media (max-width: 375px)
            {
                background-size: 25px 25px;
            }
            // @media (max-width: 768px)
            // {
            //     margin-left: 85px;
            // }
            span {
                margin-left: 50px;
                color: #868585;
            }
        }

        .vc-header {
            padding-bottom: 20px;
        }

        .vc-reset {
            line-height: 32px;
        }

        .vc-container {
            margin: 0 auto;
            width: 100%;
            max-width: 515px;
            --day-content-width: 45px;
            --day-content-height: 45px;
            --day-content-bg-color-hover: #F3F9FD;
            --day-content-bg-color-focus: #F3F9FD;
            --highlight-height: 45px;
            --dot-diameter: 5px;
            --dot-border-radius: 50%;

            .vc-day-content {
                font-size: 16px;
            }

            .vc-day-layer {
                bottom: 5px;
            }

            .vc-highlights.vc-day-layer {
                bottom: 0;

                .vc-highlight {
                    background-color: var(--day-content-bg-color-hover);
                    color: #11A5F7;
                }

                &+span.vc-text-white {
                    color: #11A5F7;
                }
            }

            .vc-bg-blue-600 {
                background-color: #11A5F7;
            }

            .vc-weekday {
                font-weight: normal;
                text-transform: uppercase;
            }
        }
    }
}
</style>

<template>
<div class="listing-consultation">
    <el-row>
        <el-col :xs="{span: 12, offset: 0}" :lg="{span: 10, offset: 1}">
            <div class="one-consultation">
                <div class="fedra-img"></div>
                <span class="welcome">Welcome!</span>
            </div>
            <div class="detail-text-group">
                <span class="smart">Sell your home the Smart way</span>
                <div class="clock-bar"><span>30 min</span></div>
                <div class="phone-call"><span>Phone call</span></div>
                <div class="text-end">
                    <span>Please select a time to speak with one of our Listing Specialists.</span>
                </div>
            </div>
        </el-col>
        <el-col :xs="{span: 12, offset: 0}" :lg="{span: 10, offset: 1}">
            <div class="calendar-wrapper">
                <div class="title">Select a Day</div>

                <client-only>
                    <v-calendar class="calendar" title-position="left" :locale="{ id: 'en', masks: { weekdays: 'WWW' }, dayNames: true }" :theme="calenderStyle" :attributes="attributes" />
                </client-only>
                <div class="time-zone-bar"><span>Buenos Aires Time (3:55pm)</span></div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import { addBusinessDays } from 'date-fns';

export default {
    layout: 'admin',
    components: {

    },
    data() {
        return {
            calenderStyle: {
                "container": {
                        "light": "vc-text-gray-900 vc-bg-white",
                    },
                },
            attributes: [
                {
                    dates: [
                        new Date(),
                    ],
                    dot: {
                        color: 'blue'
                    }
                },
                {
                    dates: [
                        new Date(),
                        addBusinessDays(new Date(), 1),
                        addBusinessDays(new Date(), 2),
                        addBusinessDays(new Date(), 3),
                        addBusinessDays(new Date(), 4),
                        addBusinessDays(new Date(), 5),
                        addBusinessDays(new Date(), 6),
                        addBusinessDays(new Date(), 7),
                        addBusinessDays(new Date(), 8),
                        addBusinessDays(new Date(), 9),
                        addBusinessDays(new Date(), 10),
                        addBusinessDays(new Date(), 11),
                    ],
                    highlight: true
                }
            ]
        }
    }
}
</script>
