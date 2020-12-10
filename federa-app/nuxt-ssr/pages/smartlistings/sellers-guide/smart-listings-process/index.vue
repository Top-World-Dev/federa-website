<style lang="scss" scoped>
.listing-process {
    margin: -20px;
    font-family: 'SFUIText-Regular';

    .block-img {
        .image-1, .image-2, .image-4, iframe {
            width: 100%;
        }

        @media (max-width: 660px) {
            margin: 0 auto;
            width: 90%;
        }

        iframe {
            height: 700px;
            @media (max-width: 660px) {
                height: 350px;
            }
            @media (max-width: 375px) {
                height: 200px;
            }
            @media (max-width: 360px) {
                height: 200px;
            }
        }

        @media (max-width: 1550px) {
            .image-1 {
                height: 530px;
            }
        }
        @media (max-width: 660px) {
            .image-1 {
                height: 400px;
            }
        }
        @media (max-width: 375px) {
            .image-1 {
                height: 350px;
            }
        }

        .explanation {
            position: absolute;
            width: 70%;
            top: 15%;
            left: 15%;
            background-color: #ffffff;
            padding: 80px;
            text-align: center;

            @media (min-width: 3000px) {
                top: 15%;
                width: 90%;
                left: 5%;
            }
            @media (max-width: 1980px) {
                top: 15%
            }
            @media (max-width: 1680px) {
                top: 14%
            }
            @media (max-width: 1550px) {
                padding: 60px;
            }
            @media (max-width: 1400px) {
                padding: 55px;
            }
            @media (max-width: 1030px) {
                padding: 40px;
            }
            @media (max-width: 660px) {
                width: 80%;
                top: 15%;
                left: 10%;
                padding: 20px;
            }
            @media (max-width: 515px) {
                top: 10%;
            }
            @media (max-width: 320px) {
                top: 6%;
            }

            h3 {
                margin-bottom: 25px;
                font-weight: bold;
                font-size: 28px;
                
                @media (min-width: 3000px) {
                   font-size: 50px;
                }
                @media (max-width: 1980px) {
                    font-size: 28px;
                }
                @media (max-width: 1680px) {
                    font-size: 28px;
                }
                @media (max-width: 1400px) {
                    font-size: 25px;
                }
                @media (max-width: 660px) {
                    margin-bottom: 20px;
                    font-size: 20px;
                }
                @media (max-width: 375px) {
                    font-size: 20px;
                }
                @media (max-width: 360px) {
                    font-size: 17px;
                }
            }
            p {
                font-size: 18px;
                margin-bottom: 0px;

                @media (min-width: 3000px) {
                   font-size: 35px;
                }
                @media (max-width: 1980px) {
                    font-size: 18px;
                }
                @media (max-width: 1680px) {
                    font-size: 18px;
                }
                @media (max-width: 1400px) {
                    font-size: 15px;
                }
                @media (max-width: 660px) {
                    font-size: 15px;
                    width: 80%;
                    margin: 0 auto;
                    color: #808080;
                }
                @media (max-width: 457px) {
                    font-size: 13px;
                }
                @media (max-width: 375px) {
                    width: 85%;
                    font-size: 11px;
                }
            }

            .button-group {
                width: 70%;
                margin: 50px auto 0px auto;

                @media (min-width: 3000px) {
                    margin: 80px auto 50px auto;
                }
                @media (max-width: 1980px) {
                    margin: 50px auto 0px auto;
                }
                @media(max-width: 1200px) {
                    margin: 30px auto 0px auto;
                }
                @media (max-width: 660px) {
                    margin: 20px auto 0px auto;
                }
                @media (max-width: 375px) {
                    width: 72%;
                }
                @media (max-width: 360px) {
                    width: 75%;
                }

                .learn-div {
                    display: inline-block;

                    .btn-learn {
                        margin: 0px 40px;
                        background-color: #ffffff;
                        border: none;
                        font-size: 20px;
                       // line-height:inherit;

                        @media (min-width: 3000px) {
                            font-size: 40px;
                        }
                        @media (max-width: 1980px) {
                            font-size: 20px;
                        }
                        @media (max-width: 1680px) {
                            font-size: 20px;
                        }
                        @media (max-width: 1050px) {
                            font-size: 18px;
                        }
                        @media (max-width: 660px) {
                            margin: 0px 40px 0px;
                            font-size: 16px;
                            color: gray;
                        }
                        @media (max-width: 320px) {
                            margin: 0px 30px 0px;
                        }
                        @media (max-width: 280px) {
                            font-size: 12px;
                        }
                    }
                }
                
                .start-div {
                    display: inline-block;

                    .btn-start {
                        margin: 0px 40px;
                        background: linear-gradient(#1e5ef0,#0040d2 50%);
                        font-size: 20px;
                        color: #ffffff;
                        border: 1px solid #0000ff;
                        font-weight: bold;
                        border-radius: 0px;
                        padding: 10px 30px;
                        line-height:inherit;

                        @media (min-width: 3000px) {
                            font-size: 40px;
                        }
                        @media (max-width: 1980px) {
                            font-size: 20px;
                        }
                        @media (max-width: 1680px) {
                            font-size: 20px;
                        }                        
                        @media (max-width: 1050px) {
                            font-size: 18px;
                        }
                        @media (max-width: 950px) {
                            margin: 0px 20px;
                        }
                        @media (max-width: 660px) {
                            font-size: 16px;
                            border-radius: 50px;
                            padding: 4px 13px;
                            margin-top: 10px;
                        }
                        @media (max-width: 280px) {
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .text-group {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffffff;
            font-size: 40px;
            text-align: center;
            width: 80%;
            @media (max-width: 1870px) {
                font-size: 35px;
            }
            @media (max-width: 1680px) {
                font-size: 30px;
            }
            @media (max-width: 1495px) {
                font-size: 25px;
            }
            @media (max-width: 1310px) {
                font-size: 22px;
            }
            @media (max-width: 1195px) {
                // width: 51%;
            }
            @media (max-width: 660px) {
                font-size: 18px;
                margin: 0 auto;
            }
            @media (max-width: 450px) {
                font-size: 15px;
            }
            @media (max-width: 375px) {
                font-size: 15px;
                margin: 0 auto;
            }
            @media (max-width: 320px) {
                font-size: 13px;
            }
            @media (max-width: 280px) {
                font-size: 11px;
            }

            p {
                margin-bottom: -10px;
                font-weight: bold;
                @media (min-width: 3000px) {
                    font-size: 50px;
                }
            }
        }

        .play {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            @media (max-width: 660px) {
                left: 55%;
            }
            @media (max-width: 375px) {
                left: 53%;
                width: 60px;
            }

            img {
                width: 60%;
                @media (min-width: 3000px) {
                    width: 100%;
                }
                @media (max-width: 660px) {
                    width: 50%;
                }
            }
        }
    }

    .top-image { 
	    height:600px;
	    background-image:url("~assets/images/light-resturant.png");
    }

    .client-reviews {
        margin-top: 60px;

        .header-title {
            text-align: center;
            margin-bottom: 30px;

            .text1 {
                font-size: 40px;
                font-weight: bold;
                margin-bottom: 0px;
                @media (max-width: 450px) {
                    font-size: 35px;
                }
                @media (max-width: 375px) {
                    font-size: 30px;
                }
                @media (max-width: 375px) {
                    font-size: 25px;
                }
            }
            .text2 {
                font-size: 25px;
                @media (max-width: 450px) {
                    font-size: 20px;
                }
                @media (max-width: 375px) {
                    font-size: 18px;
                }
                @media (max-width: 360px) {
                    font-size: 15px;
                }
            }
        }

        .body-title { 
            width: 60%;
            margin: 0 auto;
            color: #868585;

            .text1 {
                font-size: 20px;
                font-weight: bold;
                @media (max-width: 375px) {
                    font-size: 17px;
                }
                @media (max-width: 360px) {
                    font-size: 15px;
                }
            }

            .img-group {
                .star-group {
                    display: inline-block;

                    .star {
                        width:35px;
                        height:33px;
                        background-image:url("~assets/images/star.png");
                        background-repeat:no-repeat;
                        display: inline-block;
                        @media (max-width: 375px) {
                            width: 20px;
                            height: 20px;
                            background-size: 20px 20px;
                        }
                    }
                }
                .google {
                    display: inline-block;
                    width:40px;
                    height:40px;
                    background-image:url("~assets/images/google.png");
                    background-repeat:no-repeat;
                    display: inline-block;
                    float: right;
                    background-size: 40px 40px;
                    @media (max-width: 375px) {
                        width: 25px;
                        height: 25px;
                        background-size: 25px 25px;
                    }
                }
            }

            .slide-review {
                margin-top: 30px;
                @media (max-width: 375px) {
                    margin-top: 15px;
                }
            }
        }
    }

    .chart {
        width: 70%;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 100px;
        @media (max-width: 375px) {
            width: 80%;
            margin-bottom: 0px;
        }

        .title {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            color: #868585;
            @media (max-width: 450px) {
                font-size: 30px;
            }
            @media (max-width: 375px) {
                font-size: 25px;
            }
            @media (max-width: 360px) {
                font-size: 20px;
            }
        }

        .track-order {
        margin-top: 50px;
        @media (max-width: 660px) {
            margin-top: 20px;
        }

            &__container {
                color: #868585;
            }

            &__item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
                position: relative;
            }

            &__left {
                width: 40%;
            }

            &__icon {
                @media(max-width: 660px) {
                width: 25px;
                }
            }

            &__status {
                font-size: 18px;
                
                @media(max-width: 660px) {
                    font-size: 15px;
                }
                @media(max-width: 450px) {
                    font-size: 14px;
                }
                @media (max-width: 375px) {
                    font-size: 13px;
                }
            }

            &__center, &__right {
                width: 10%;
                display: flex;
                justify-content: center;

                span {
                    font-size: 22px;
                    font-weight: bold;
                    @media(max-width: 660px) {
                        font-size: 23px;
                    }
                    @media (max-width: 450px) {
                       font-size: 17px;
                    }
                    @media (max-width: 375px) {
                        font-size: 15px;
                    }
                    @media (max-width: 360px) {
                        font-size: 13px;
                    }
                }
            }

            &__active_true {
                display: block;
                content: ' ';
                width: 16px;
                height: 16px;
                background-color: #0000ff;
                left: -60px;
                border: solid 1px blue;
                border-radius: 30px;
                @media (max-width: 660px) {
                    width: 12px;
                    height: 12px;
                }
            }

            &__active_false {
                display: block;
                content: ' ';
                width: 16px;
                height: 16px;
                background-color: #fff;
                left: -60px;
                border: 1px solid #808080;
                border-radius: 30px;
                @media (max-width: 660px) {
                    width: 12px;
                    height: 12px;
                }
            }
        }
    }

    .line-detail {
        padding-top: 100px;
        width: 80%;
        margin: 0 auto;
        @media (max-width: 1150px) {
            width: 90%;
        }
        @media (max-width: 1045px) {
            width: 95%;
        }
        @media (max-width: 660px) {
            display: none;
        }
        @media (max-width: 800px) {
            width: 80%;
        }

        h3 {
            color: #0000ff;
            font-weight: bold;
            font-size: 23px;
            @media (min-width: 1980px) {
                font-size: 27px;
            }
            @media (max-width: 1200px) {
                font-size: 18px;
            }
        }
        p {
            color: #868585;
            font-size: 16px;
            @media (min-width: 1980px) {
                font-size: 18px;
            }
            @media (max-width: 1200px) {
                font-size: 13px;
            }
        }

        .left-group {
            display: inline-block;
            width: 42%;
            text-align: right;
            margin: 155px 0px 0px 50px;
            
            @media (max-width: 1152px) {
            }
            @media (max-width: 1045px) {
                margin: 155px 0px 0px 20px;
            }

            .left-list {
                margin-right: 10px;
                position: relative;
                min-height: 360px;
                @media (max-width: 1680px) {
                }
                @media (max-width: 1600px) {
                }
                @media (max-width: 1152px) {
                }
                @media (max-width: 1024px) {
                }

                p::after {
                    content: "2";
                    position: absolute;
                    font-size: 25px;
                    top: 43px;
                    right: -48px;
                    color: #000;
                    font-weight: bold;
                    background-color: #fff;
                }
            }
            .left-negotiate {
                position: relative;
                margin-right: 10px;
                min-height: 340px;
                @media(min-width: 1980px) {
                }
                @media (max-width: 1200px) {
                }

                p::after {
                    content: "4";
                    position: absolute;
                    font-size: 25px;
                    top: 38px;
                    right: -48px;
                    color: #000;
                    font-weight: bold;
                    background-color: #fff;
                }
            }
            .left-close {
                position: relative;
                margin-right: 10px;
                min-height: 150px;
                @media (max-width: 1200px) {
                }
                @media(min-width: 1980px) {
                }
                @media (max-width: 1180px) {
                }
                @media (max-width: 1366px) {
                }
                @media (max-width: 1152px) {
                }
                @media (max-width: 1024px) {
                }

                p::after {
                    content: "6";
                    position: absolute;
                    font-size: 25px;
                    top: 33px;
                    right: -48px;
                    color: #000;
                    font-weight: bold;
                    background-color: #fff;
                }
            }
        }
        .right-group {
            display: inline-block;
            width: 45%;
            margin-left: 25px;
            vertical-align: top;
            border-left: 1px solid #868585;

            .right-connect {
                margin-left: 45px;
                position: relative;
                min-height: 340px;

                @media (max-width: 1200px) {
                }

                h3::before {
                    content: "1";
                    left: -53px;
                    font-size: 25px;
                    position: absolute;
                    background-color: #fff;
                    color: #fff;
                }
                
                p::before {
                    content: "1";
                    position: absolute;
                    top: 30px;
                    left: -54px;
                    font-size: 25px;
                    font-weight: bold;
                    color: #000;
                    background-color: #fff;
                }
            }
            .right-show {
                margin-left: 40px;
                position: relative;
                min-height: 350px;

                @media(min-width: 1980px) {
                }
                @media (min-width: 1640px) {
                }

                p::before {
                    content: "3";
                    position: absolute;
                    top: 37px;
                    left: -49px;
                    font-size: 25px;
                    font-weight: bold;
                    color: #000;
                    background-color: #fff;
                }
            }
            .right-review {
                margin-left: 40px;
                position: relative;
                min-height: 220px;

                @media(min-width: 1980px) {
                }
                @media (max-width: 1680px) {
                }
                @media (max-width: 1366px) {
                }

                p::before {
                    content: "5";
                    position: absolute;
                    top: 30px;
                    left: -50px;
                    font-size: 25px;
                    font-weight: bold;
                    color: #000;
                    background-color: #fff;
                }
            }
        }
    }

    .line-detail2 {
        display: none;
        padding-top: 50px;
        @media (max-width: 660px) {
            display: block !important;
            span {
                font-size: 25px;
                font-weight: bold;
                @media (max-width: 375px) {
                    font-size: 20px;
                }
            }
        }

        h3 {
            color: #0000ff;
            font-weight: bold;
            font-size: 20px;
            @media (max-width: 375px) {
                    font-size: 16px;
                }
        }
        p {
            color: #868585;
            @media (max-width: 375px) {
                font-size: 13px;
            }
        }

        .left-group {
            display: inline-block;
            width: 42%;
            text-align: right;
            margin: 100px 0px 0px 50px;
            @media (max-width: 660px) {
                display: block;
                width: 90%;
                text-align: center;
                margin: 0 auto;
            }

            .left-list {
                margin-right: 10px;
                margin-bottom: 100px;
                position: relative;
                @media (max-width: 660px) {
                    margin-right: 0px;
                    margin-bottom: 50px;
                }

                p::after {
                    content: "2";
                    position: absolute;
                    font-size: 20px;
                    top: 38px;
                    right: -46px;
                    color: #000;
                    font-weight: bold;
                    background-color: #fff;
                    @media (max-width: 660px) {
                        display: none;
                    }
                }
            }
            .left-negotiate {
                position: relative;
                margin-right: 10px;
                margin-bottom: 65px;
                @media (max-width: 660px) {
                    margin-right: 0px;
                    margin-bottom: 50px;
                }

                p::after {
                    content: "4";
                    position: absolute;
                    font-size: 20px;
                    top: 38px;
                    right: -46px;
                    color: #000;
                    font-weight: bold;
                    background-color: #fff;
                    @media (max-width: 660px) {
                        display: none;
                    }
                }
            }
            .left-close {
                position: relative;
                margin-right: 10px;
                margin-top: 145px;
                @media (max-width: 660px) {
                    margin-right: 0px;
                    margin-bottom: 50px;
                    margin-top: 0px;
                }

                p::after {
                    content: "6";
                    position: absolute;
                    font-size: 20px;
                    top: 27px;
                    right: -48px;
                    color: #000;
                    font-weight: bold;
                    background-color: #fff;
                    @media (max-width: 660px) {
                        display: none;
                    }
                }
            }
        }
        .right-group {
            display: inline-block;
            width: 45%;
            margin-left: 25px;
            vertical-align: top;
            border-left: 1px solid #868585;
            @media (max-width: 660px) {
                display: block;
                width: 90%;
                text-align: center;
                margin: 0 auto;
                border: none;
            }

            .right-connect {
                margin-left: 40px;
                position: relative;
                @media (max-width: 660px) {
                    margin-left: 0px;
                    margin-bottom: 50px;
                }

                p::before {
                    content: "1";
                    position: absolute;
                    top: 30px;
                    left: -46px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #000;
                    background-color: #fff;
                    @media (max-width: 660px) {
                        display: none;
                    }
                }
            }
            .right-show {
                margin-left: 40px;
                margin-top: 180px;
                position: relative;
                @media (max-width: 660px) {
                    margin-left: 0px;
                    margin-bottom: 50px;
                    margin-top: 0px;
                }

                p::before {
                    content: "3";
                    position: absolute;
                    top: 30px;
                    left: -48px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #000;
                    background-color: #fff;
                    @media (max-width: 660px) {
                        display: none;
                    }
                }
            }
            .right-review {
                margin-top: 235px;
                margin-left: 40px;
                position: relative;
                @media (max-width: 660px) {
                    margin-left: 0px;
                    margin-top: 0px;
                }

                p::before {
                    content: "5";
                    position: absolute;
                    top: 30px;
                    left: -47px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #000;
                    background-color: #fff;
                    @media (max-width: 660px) {
                        display: none;
                    }
                }
            }
        }
    }

    .end {
        margin-top: 100px;

        .header-title {
            text-align: center;
            margin-bottom: 30px;

            .text1 {
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 0px;
                @media (max-width: 375px) {
                    font-size: 16px;
                }
            }
            .text2 {
                font-size: 30px;
                font-weight: bold;
                @media (max-width: 375px) {
                    font-size: 16px;
                }
            }
        }

        .end-img {
            width: 70%;
            margin: 0 auto;
            @media (max-width: 660px) {
                width: 85%;
            }
        }

        .body-text {
            text-align: center;
            width: 42%;
            margin: 60px auto;
            font-size: 20px;
            // border: 1px solid lightgray;
            font-weight: bold;
            color: gray;
            @media(max-width: 660px) {
                width: 60%;
                margin: 50px auto;
                font-size: 18px;
            }
            @media (max-width: 375px) {
                font-size: 10px;
                margin: 35px auto;
            }
            @media (max-width: 375px) {
                width: 67%;
            }

            p:hover {
                color: lightblue;
                cursor: pointer;
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
                font-size: 20px;
                font-weight: bold;
                @media (max-width: 375px) {
                    font-size: 18px;
                }
            }
        }
    }
}

</style>

<template>
<div class="listing-process">
    <el-row>
        <div class="block-img">
            <img class="image-1" src="~assets/images/light-resturant.png" alt="">
            <div class="explanation">
                <div>
                    <h3>How do Home Sellers benefit from Federa?</h3>
                    <p>With Federa, you get a licensed agent and better service all for a flat fee of <b style="color: #0000ff">$1,000</b>.</p>
                    <p>We do the work for you while helping you <b style="color: #0000ff">save on average $11,000+</b></p>
                </div>
                <div class="button-group">
                    <div class="learn-div"><button class="btn-learn">Learn More</button></div>
                    <div class="start-div"><el-button class="btn-start" type="primary" plain>Get Started</el-button></div>
                    <!-- <button class="btn-start">Get Started</button> -->
                </div>
            </div>
        </div>
    </el-row>
    <el-row>
        <div class="client-reviews">
            <div class="header-title">
                <p class="text1">Client reviews</p>
                <p class="text2"><i style="font-weight: bold;">* Federa</i><i>&nbsp;formally (Federa Realty).</i></p>
            </div>
            
            <div class="body-title">
                <span class="text1">Hossein Ghodosi Fard</span>
                <div class="img-group">
                    <div class="star-group">
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                    </div>
                    <div class="google"></div>
                </div>
                <div class="slide-review">
                    <vueper-slides class="no-shadow" arrows-outside bullets-outside transition-speed="250">
                        <vueper-slide class="review-text"
                            v-for="i in 6"
                            :key="i"
                            content="I had a great experience working with Sam. He’s always available and super responsive. He had 
                            never lost his enthusiasm looking for my ideal apartment during the long period of time that we 
                            were actively looking I also found Sam very honest about his opinios. Sam is highly recommend.<br> 
                            I always ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read more"
                            :style="'background-color:' + '#ffffff'" />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </el-row>
    <el-row>
        <div class="chart">
            <div class="title">
                <span>Comparison Chart</span>
            </div>
            <div class="track-order">
                <div class="track-order__container">
                    <div class="track-order__item">
                        <div class="track-order__left">
                            <span class="track-order__status"></span>
                        </div>

                        <div class="track-order__center">
                            <span>Federa</span>
                        </div>
                        <div class="track-order__right">
                            <span>Traditional Brokerages</span>
                        </div>
                    </div>
                    <div class="track-order__item" v-for="(item, index) in elements" :key="index">
                        <div class="track-order__left">
                            <span class="track-order__status">
                            {{item.status}}
                            </span>
                        </div>

                        <div class="track-order__center">
                            <span :class="{'track-order__active_true': item.active1, 'track-order__active_false': !item.active1}">
                            </span>
                        </div>
                        <div class="track-order__right">
                            <span :class="{'track-order__active_true': item.active2, 'track-order__active_false': !item.active2}">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-row>
    <el-row>
        <div class="block-img">
            <div class="play-image-group">
                <img class="image-2" src="~assets/images/bath.png" alt="">
                <div class="text-group">
                    <p>Selling your home is a major milestone.</p>
                    <p>When you’re ready, Federa is ready too.</p>
                    <p style="text-align: center;">Here is how it works</p>
                </div>
                <div class="play">
                    <img @click="playVideo" class="image-3" src="~assets/images/player.png" alt="">
                </div>
            </div>
            <div class="after"></div>
        </div>
    </el-row>
    <el-row>
        <div class="line-detail">
            <div class="left-group">
                <div class="left-list">
                    <h3 class="left-list-title">LIST</h3>
                    <p>Federa utilizes the latest technology to streamline the listing process, without interrupting your busy schedule. Once your information is submitted, your dedicated Listing Specialist will list your property on the MLS as well as over 800 popular sites such as Zillow, Realtor.com, Truila etc. In addition, a lock-box and a yard sign will be professionally installed on your property.</p>
                </div>
                <div class="left-negotiate">
                    <h3 class="left-negotiate-title">NEGOTIATE</h3>
                    <p>Federa agents are expert negotiators. Once we receive an offer on your property, your Listing Specialist will contact you to review the details and ensure that there are no questions left behind. Your agent will negotiate on your behalf to find the right buyer and reach the best deal possible.</p>
                </div>
                <div class="left-close">
                    <h3 class="left-close-title">CLOSE</h3>
                    <p>Your agent will handle all closing procedures and signings and finalize the sale of your property.</p>
                </div>
            </div>
            <div class="right-group">
                <div class="right-connect">
                    <h3 class="right-connect-title">CONNECT</h3>
                    <p>Speak with one of our experienced Listing Specialists to discuss the details of your property. Your Listing Specialist will use this information to create a personalized listing agreement.</p>
                </div>
                <div class="right-show">
                    <h3 class="right-show-title">SHOW</h3>
                    <p>We manage all your showing requests and all you have to do is confirm or reject the appointments.</p>
                </div>
                <div class="right-review">
                    <h3 class="right-review-title">REVIEW</h3>
                    <p>Your agent will break down each step to ensure that you understand every detail. Once an offer has been accepted, your Listing Specialist will handle all of the transactional procedures, review the agreements and coordinate the settlement documents.</p>
                </div>
            </div>
        </div>
    </el-row>
    <el-row>
        <div class="line-detail2">
            <div class="left-group">
                <div class="left-list">
                    <span>1</span>
                    <h3 class="right-connect-title">CONNECT</h3>
                    <p>Speak with one of our experienced Listing Specialists to discuss the details of your property. Your Listing Specialist will use this information to create a personalized listing agreement.</p>
                </div>
                <div class="left-negotiate">
                    <span>2</span>
                    <h3 class="left-list-title">LIST</h3>
                    <p>Federa utilizes the latest technology to streamline the listing process, without interrupting your busy schedule. Once your information is submitted, your dedicated Listing Specialist will list your property on the MLS as well as over 800 popular sites such as Zillow, Realtor.com, Truila etc. In addition, a lock-box and a yard sign will be professionally installed on your property.</p>
                </div>
                <div class="left-close">
                    <span>3</span>
                    <h3 class="right-show-title">SHOW</h3>
                    <p>We manage all your showing requests and all you have to do is confirm or reject the appointments.</p>
                </div>
            </div>
            <div class="right-group">
                <div class="right-connect">
                    <span>4</span>
                    <h3 class="left-negotiate-title">NEGOTIATE</h3>
                    <p>Federa agents are expert negotiators. Once we receive an offer on your property, your Listing Specialist will contact you to review the details and ensure that there are no questions left behind. Your agent will negotiate on your behalf to find the right buyer and reach the best deal possible.</p>
                </div>
                <div class="right-show">
                    <span>5</span>
                    <h3 class="right-review-title">REVIEW</h3>
                    <p>Your agent will break down each step to ensure that you understand every detail. Once an offer has been accepted, your Listing Specialist will handle all of the transactional procedures, review the agreements and coordinate the settlement documents.</p>
                </div>
                <div class="right-review">
                    <span>6</span>
                    <h3 class="left-close-title">CLOSE</h3>
                    <p>Your agent will handle all closing procedures and signings and finalize the sale of your property.</p>
                </div>
            </div>
        </div>
    </el-row>
    <el-row>
        <div class="end">
            <div class="header-title">
                <p class="text1">Our clients save on average <b style="color: #0000ff;">$11,000+</b>.</p>
                <p class="text2">Start saving today.</p>
            </div>
            <div class="block-img end-img"> 
                <img class="image-4" src="~assets/images/federa_home_1.jpg" alt="">
            </div>
            <div class="body-text">
                <p>See more of our recently sold Smart Listings</p>
            </div>
            <div class="start-button">
                <button>Get Started</button>
            </div>
        </div>
    </el-row>
</div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css';

    export default {
        layout: 'admin',
        name: 'index',
        components: {
            VueperSlides, VueperSlide
        },
        methods: {
            playVideo() {
                $('.play-image-group').remove();
                if($(window).width() == 375 || $(window).width() == 360)
                {
                    $('.after').after('<iframe @click="stopVideo" width="100%" height="200px" src="https://www.youtube.com/embed/rtrBCLQ32io?byline=0&portrait=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                }
                else if($(window).width() == 660)
                {
                    $('.after').after('<iframe @click="stopVideo" width="100%" height="370px" src="https://www.youtube.com/embed/rtrBCLQ32io?byline=1&portrait=1&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                }
                else {
                    $('.after').after('<iframe @click="stopVideo" width="100%" height="650px" src="https://www.youtube.com/embed/rtrBCLQ32io?byline=2&portrait=2&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                }
            },
        },
        data() {
            return {
                elements: [
                    {
                        status: '1% - 3% listing commission fee.',
                        active1: false,
                        active2: true,
                    },
                    {
                        status: 'List for a flat fee of $1,000',
                        active1: true,
                        active2: false,
                    },
                    {
                        status: 'Dedicated licensed real estate agent that assists you from list to close.',
                        active1: true,
                        active2: false,
                    },
                    {
                        status: 'Property listed on MLS, Zillow, Realtor.com and other popular real estate sites. No additional cost',
                        active1: true,
                        active2: false,
                    },
                    {
                        status: 'Free yard sign and lock box professionally installed.',
                        active1: true,
                        active2: false,
                    },
                    {
                        status: 'Average number of days to sell in 2019. Source: BirghtMLS and Zillow',
                        active1: true,
                        active2: true,
                    },
                ]
            }
        }
    }
</script>