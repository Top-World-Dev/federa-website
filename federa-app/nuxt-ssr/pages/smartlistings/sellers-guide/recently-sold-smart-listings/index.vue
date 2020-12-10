<template>
    <div class="sold-smart-listings">
        <el-row>
            <div class="title"><span>Our Recently Sold Listings</span></div>
        </el-row>
        <el-row>
            <div class="image-group1">
                <div class="image-group1-1">
                    <img class="image-1" src="~assets/images/recently-sold1.png" alt="">
                    <div class="image1-text">
                        <span>6805 Dillon Ave McLean, VA 22101</span>
                    </div>
                </div>
                <div class="image-group1-2">
                    <img class="image-2" src="~assets/images/recently-sold2.png" alt="">
                    <div class="image2-text">
                        <span>3104 Valley Ln Falls Church, VA 22044</span>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <div class="image-group2">
                <div class="image-group2-1">
                    <img class="image-3" src="~assets/images/recently-sold3.png" alt="">
                    <div class="image3-text">
                        <span>1215 Seacobeck St Fredericksburg, VA 22401</span>
                    </div>
                </div>
                <div class="image-group2-2">
                    <img class="image-4" src="~assets/images/recently-sold4.png" alt="">
                    <div class="image4-text">
                        <span>15445 Arbory Way #166 Laurel, MD 20707</span>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <div class="image-group3">
                <div class="image-group3-1">
                    <img class="image-5" src="~assets/images/recently-sold5.png" alt="">
                    <div class="image5-text">
                        <span>4909 29th Rd S Arlington, VA 22206</span>
                    </div>
                </div>
                <div class="image-group3-2">
                    <img class="image-6" src="~assets/images/recently-sold6.png" alt="">
                    <div class="image6-text">
                        <span>2301 Shawn Ct Dunn Loring, VA 22027</span>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <div class="image-group4">
                <div class="image-group4-1">
                    <img class="image-7" src="~assets/images/recently-sold7.png" alt="">
                    <div class="image7-text">
                        <span>5501 Sequoia Farms Dr Centreville, VA 20120</span>
                    </div>
                </div>
                <div class="image-group4-2">
                    <img class="image-8" src="~assets/images/recently-sold8.png" alt="">
                    <div class="image8-text">
                        <span>6014 Wendron Way Alexandria, VA 22315</span>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <div class="image-group5">
                <div class="image-group5-1">
                    <img class="image-9" src="~assets/images/recently-sold9.png" alt="">
                    <div class="image9-text">
                        <span>2111 N Scott St #58 Arlington, VA 22209</span>
                    </div>
                </div>
                <div class="image-group5-2">
                    <img class="image-10" src="~assets/images/recently-sold10.png" alt="">
                    <div class="image10-text">
                        <span>6715 Dorman St Hyattsville, MD 20784</span>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <div class="image-group6">
                <div class="image-group6-1">
                    <img class="image-11" src="~assets/images/recently-sold11.png" alt="">
                    <div class="image11-text">
                        <span>8220 Crestwood Heights Dr #718 Mclean, VA 22102</span>
                    </div>
                </div>
                <div class="image-group6-2">
                    <img class="image-12" src="~assets/images/recently-sold12.png" alt="">
                    <div class="image12-text">
                        <span>4601 Hummingbird Ln #102 Fairfax, VA 22033</span>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <div class="end-title">
                <div class="text-group">
                    <p class="text1">With Smart Listings, you save on average</p>
                    <p class="text2"><b style="color: #0000ff;">$11,000</b> in commission fees.</p>
                </div>
                <div class="start-button">
                    <button>Get Started</button>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        layout: 'admin',
        name: 'index',
        components: {

        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .sold-smart-listings {
        font-family: 'SFUIText-Regular';

        .title {
            text-align: center;
            font-weight: bold;
            font-size: 30px;
            margin: 40px auto;

            @media (max-width: 375px) {
                font-size: 20px;
            }
        }
        .image-group1 {
            text-align: center;
            margin-bottom: 30px;

            .image-group1-1 {
                display: inline-block;
                width: 45%;
                margin-right: 20px;
                padding-left: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-right: 0px;
                    padding-left: 0px;
                    margin-bottom: 30px;
                }

                .image-1 {
                    width: 90%;
                }
                .image1-text {
                    margin-top: 10px;
                    font-size: 15px;
                    
                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
            .image-group1-2 {
                display: inline-block;
                width: 45%;
                margin-left: 20px;
                padding-right: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-left: 0px;
                    padding-right: 0px;
                }

                .image-2 {
                    width: 90%;
                }
                .image2-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
        }
        .image-group2 {
            text-align: center;
            margin-bottom: 30px;

            .image-group2-1 {
                display: inline-block;
                width: 45%;
                margin-right: 20px;
                padding-left: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-right: 0px;
                    padding-left: 0px;
                    margin-bottom: 30px;
                }

                .image-3 {
                    width: 90%;
                }
                .image3-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
            .image-group2-2 {
                display: inline-block;
                width: 45%;
                margin-left: 20px;
                padding-right: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-left: 0px;
                    padding-right: 0px;
                }

                .image-4 {
                    width: 90%;
                }
                .image4-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
        }
        .image-group3 {
            text-align: center;
            margin-bottom: 30px;

            .image-group3-1 {
                display: inline-block;
                width: 45%;
                margin-right: 20px;
                padding-left: 40px;
                margin-bottom: 30px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-right: 0px;
                    padding-left: 0px;
                }

                .image-5 {
                    width: 90%;
                }
                .image5-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
            .image-group3-2 {
                display: inline-block;
                width: 45%;
                margin-left: 20px;
                padding-right: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-left: 0px;
                    padding-right: 0px;
                }

                .image-6 {
                    width: 90%;
                }
                .image6-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
        }
        .image-group4 {
            text-align: center;
            margin-bottom: 30px;

            .image-group4-1 {
                display: inline-block;
                width: 45%;
                margin-right: 20px;
                padding-left: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-right: 0px;
                    padding-left: 0px;
                    margin-bottom: 30px;
                }

                .image-7 {
                    width: 90%;
                }
                .image7-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
            .image-group4-2 {
                display: inline-block;
                width: 45%;
                margin-left: 20px;
                padding-right: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-left: 0px;
                    padding-right: 0px;
                }

                .image-8 {
                    width: 90%;
                }
                .image8-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
        }
        .image-group5 {
            text-align: center;
            margin-bottom: 30px;

            .image-group5-1 {
                display: inline-block;
                width: 45%;
                margin-right: 20px;
                padding-left: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-right: 0px;
                    padding-left: 0px;
                    margin-bottom: 30px;
                }

                .image-9 {
                    width: 90%;
                }
                .image9-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
            .image-group5-2 {
                display: inline-block;
                width: 45%;
                margin-left: 20px;
                padding-right: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-left: 0px;
                    padding-right: 0px;
                }

                .image-10 {
                    width: 90%;
                }
                .image10-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
        }
        .image-group6 {
            text-align: center;
            margin-bottom: 30px;

            .image-group6-1 {
                display: inline-block;
                width: 45%;
                margin-right: 20px;
                padding-left: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-right: 0px;
                    padding-left: 0px;
                    margin-bottom: 30px;
                }

                .image-11 {
                    width: 90%;
                }
                .image11-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
            .image-group6-2 {
                display: inline-block;
                width: 45%;
                margin-left: 20px;
                padding-right: 40px;

                @media (max-width: 660px) {
                    width: 100%;
                    margin-left: 0px;
                    padding-right: 0px;
                }

                .image-12 {
                    width: 90%;
                }
                .image12-text {
                    margin-top: 10px;
                    font-size: 15px;

                    @media (max-width: 660px) {
                        font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 13px;
                    }
                }
            }
        }
        .end-title {
            margin: 100px auto;
            font-size: 28px;

            @media (max-width: 660px) {
                font-size: 22px;
            }
            @media (max-width: 375px) {
                font-size: 13px;
            }

            .text-group {
                text-align: center;
                color: #868585;
                font-weight: bold;

                .text1 {
                    margin-bottom: 0px;
                }
                .text2 {

                }
            }
            .start-button {
                width: 30%;
                margin: 100px auto;
                justify-content: center;
                display: flex;
                @media(max-width: 660px) {
                    width: 50%;
                    margin: 60px auto;
                }
                @media (max-width: 375px) {
                    width: 66%;
                    margin: 35px auto;
                }

                button {
                    border-radius: 50px;
                    color: #ffffff;
                    background-color: #0040D2;
                    border: 1px solid #0040D2;
                    width: 60%;
                    height: 50px;
                    font-size: 21px;
                    font-weight: bold;
                    @media (max-width: 375px) {
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>