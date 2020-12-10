<style lang="scss">
.listing-date {
    padding: 33px 0 100px 0;
    text-align: center;

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
        font-family: 'SFUIText-Regular';

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

    .calendar-wrapper {
        .title {
            margin-top: 65px;
            font-weight: bold;
            font-size: 24px;
            color: #4E5156;
            margin-bottom: 20px;
            font-family: 'SFUIText-Regular';
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
<div class="listing-date">

    <el-row>
        <el-col :xs="{span: 24, offset: 0}" :lg="{span: 16, offset: 4}">
            <div class="header">
                Select your preferred listing date. If you're unsure just leave it blank and come back to it!
            </div>

            <div class="calendar-wrapper">
                <div class="title">Select a Day</div>
                <client-only>
                    <v-calendar class="calendar" title-position="left" :locale="{ id: 'en', masks: { weekdays: 'WWW' }, dayNames: true }" :theme="calenderStyle" :attributes="attributes" />
                </client-only>
            </div>

        </el-col>
    </el-row>

</div>
</template>

<script>
import { addBusinessDays } from 'date-fns';

export default {
    layout: 'admin',
    data() {
        return {
            calenderStyle: {
                "container": {
                    "light": "vc-text-gray-900 vc-bg-white",
                },
            },
            attributes: [{
                dates: [
                    new Date(),
                ],
                dot: {
                    color: 'blue'
                }
            }, {
                dates: [
                    new Date(),
                    addBusinessDays(new Date(), 1),
                    addBusinessDays(new Date(), 2),
                    addBusinessDays(new Date(), 4),
                    addBusinessDays(new Date(), 10),
                ],
                highlight: true
            }, ]
        }
    }
}
</script>
