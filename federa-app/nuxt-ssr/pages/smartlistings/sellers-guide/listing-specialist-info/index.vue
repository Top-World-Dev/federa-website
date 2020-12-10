<style lang="scss" scoped>
  .vueperslides {
    width: 70%;
    margin: 45px auto;
  }

  .review-text {
    font-size: 20px;
    text-align: left;
    color: #868585;
  }

  .el-main {
    padding: 0px !important;
  }

  .sellers-guide {
    margin: -20px;
    background-color: #ffffff;
    font-family: 'SFUIText-Regular';
  }

  #cost_home_group {
    text-align: center;
    padding-bottom: 30px;
  }

  #e14_13603 {
    width:100px;
    height:100px;
    background-image:url("~assets/images/player.png");
    background-repeat:no-repeat;
  }

  #empty_div_1 {
    height: 55px;
  }

  #empty_div_2 {
    height: 70px;
  }

  .cost-home {
    text-align: center; 
    padding-bottom: 30px; 
    padding-top: 100px;
  }

  .blue-money {
    display: block;
    margin: auto;
    width: 50px;
    height: 50px;
    background-image: url("~assets/images/blue-money.png");
    background-size: 50px 50px;
    margin-bottom: 20px;
  }

  .sold {
    display: block;
    margin: auto;
    width: 50px;
    height: 50px;
    background-image: url("~assets/images/sold.png");
    background-size: 50px 50px;
    margin-bottom: 20px;
  }

  .post-closing {
    display: block;
    margin: auto;
    width: 50px;
    height: 50px;
    background-image: url("~assets/images/post-closing.png");
    background-size: 50px 50px;
    margin-bottom: 20px;
  }

  .youtube {
    width: 100%;
    height: 700px;
  }

  .image1 {
    width: 100%;
    height: 700px;

    @media(max-width: 1070px) {
        height: 500px;
    }

    @media(max-width: 900px) {
        height: 400px;
    }
  }

  .block-img {
    position: relative;
    .play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 375px) {
            left: 53%;
            width: 60px;
        }

        img {
            width: 80%;
            cursor: pointer;
        }
    }
  }

  .image2 {
    width: 75%;
    height: 75%;
    margin: 0 auto;
    display: flex;
  }

  .text {
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    margin-top: -6px;

    span {
      font-weight: bold;

      .text_1 {
        font-size: 20px;
        padding-top: 15px;
        margin-bottom: 0rem !important;
        padding-bottom: 15px;
      }

      .text_2 {
        font-size: 20px;
        padding-bottom: 15px;
      }
    }
  }

  .reviews {
    text-align: center;
    padding-top: 60px;

    @media(max-width: 768px) {

    }

    span {

      .text_1 {
        font-size: 30px;
        padding-top: 15px;
        margin-bottom: 0rem !important;
        font-weight: bold;
      }

      .text_2 {
        font-size: 20px;
        padding-bottom: 15px;
      }
    }
  }

  #detail_info_1 {
	position: relative;
	width: 100%;
  height: 260px;
  }

  #photo {
    border-radius: 500px;
    width: 185px;
    height: 200px;
    position: absolute;
    left: 30%;
    top: 48px;
    background-image:url("~assets/images/Lymaris_1.png");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 200px 200px;
    // border: 5px solid #ffffff;
    display: inline-block;

    @media(max-width: 1070px) {
      left: 20%;
    }

    @media(max-width: 952px) {
      left: 15%;
    }

    @media(max-width: 860px) {
      left: 20%;
    }

    @media(max-width: 606px) {
      left: 12%;
    }

    @media(max-width: 510px) {
      left: 8%;
    }
  }

  #hosage {
    display: inline-block;
    margin-left: calc(30% + 240px);
    margin-top: 110px;

    @media(max-width: 1070px) {
      margin-left: calc(15% + 240px);
    }

    @media(max-width: 952px) {
      margin-left: calc(8% + 240px);
    }

    @media(max-width: 860px) {
      margin-left: calc(20% + 240px);
    }

    @media(max-width: 606px) {
      margin-left: calc(8% + 240px);
    }
    @media(max-width: 510px) {
      margin-left: calc(8% + 200px);
    }
  }

  #hosage_titles {
    text-align: center;
  }

  #hosage_link {
    color:rgba(0, 64.00000378489494, 210.00000268220901, 1);
    height:38px;
    font-size:24px;
    font-weight: bold;
    letter-spacing:0;
    display: inline-block;
    margin-bottom: 1rem;

    @media(max-width: 606px) {
      font-size: 20px;
    }
  }

  #hosage_line {
    margin-top: 0px;
    margin-bottom: 0px;
    border:1px solid rgba(0, 64.00000378489494, 210.00000268220901, 1);
  }

  #hosage_listing {
    color: rgba(134.00000721216202, 133.00000727176666, 133.00000727176666, 1);
    height: 38px;
    font-size: 24px;
    letter-spacing: 0;
    display: flex;
    justify-content: center;

    @media(max-width: 606px) {
      font-size: 20px;
    }
  }

  #stats {
    text-align: center;
    margin-top: 50px;
    font-size: 17px;
    .stats-content {

    }
  }

  #stats_text {
    color:rgba(0, 0, 0, 1);
    width:486px;
    height:33px;
    font-size:30px;
    letter-spacing:0;
    font-weight: bold;
  }

  #detail_info_2 {
    text-align: center;
    padding-top: 20px;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 10px;
  }

  #detail_info_2_each_group {
    display: inline-block;
    padding: 0px 70px;

    @media (max-width: 1165px) {
      padding: 0px 15px;
    }

    @media (max-width: 1038px) {
      padding: 0px 5px;
    }

    @media (max-width: 960px) {
      padding: 0px 1px;
    }
  }

  #detail_info_2_text_1 {
    color:rgba(0, 0, 0, 1);
    height:31px;
    font-size:19px;
    letter-spacing:0;
    font-weight: bold;

    @media (max-width: 1165px) {
      font-size: 17px;
    }
    @media (max-width: 1038px) {
      font-size: 15px;
    }
  }

  #detail_info_2_text_2 {
    color: #0040d2;
    height:24px;
    font-size:18px;
    letter-spacing:0;
    display: flex;
    justify-content: center;
    padding-top: 5px;

    @media (max-width: 1165px) {
      font-size: 12px;
    }
    @media (max-width: 1038px) {
      font-size: 10px;
    }
  }

  #detail_info_2_line {
    transform: rotate(0deg);
    border: 1px solid #9C9C9C;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  #compare_stats {
    text-align: center;
    padding-bottom: 100px;
    width: fit-content;
    margin: 0 auto;
  }

  #bright {
    display: inline-block;
    vertical-align: 135px;
    padding-right: 80px;

    @media (max-width: 1165px) {
      padding-right: 30px;
    }
    @media (max-width: 1038px) {
      padding-right: 0px;
      display: initial;
    }
  }

  #inline_block_1 {
    display: inline-block;
    padding: 0px 10px;
  }

  #inline_block_2 {
    display: inline-block;
    padding: 0px 44px;
  }

  #compare_title {
    color:rgba(0, 0, 0, 1);
    height:24px;
    font-size:13px;
    font-weight: bold;
  }

  #bright_img {
    width: 185px;
    height:100%;
    background-image:url("~assets/images/bright.png");
    @media (max-width: 1038px) {
      margin-left: 95px;
    }
  }

  #fa_ring_img {
    width: 50px;
    height: 50px;
    background-image:url("~assets/images/fa-ring.png");
    background-size: 50px 50px;
  }

  #fa_buck_img {
    width: 50px;
    height: 50px;
    background-image: url("~assets/images/fa-buck.png");
    background-size: 50px 50px;
  }

  #fa_img_text_1 {
    color: black;
    height: 31px;
    font-size: 19px;
    letter-spacing: 0;
    font-weight: bold;
  }

  #fa_img_text_2 {
    color: #868585;
    height: 24px;
    font-size: 13px;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
    padding-top: 5px;
  }

  #cost_home {
    color:rgba(0, 0, 0, 1);
    height:48px;
    font-size:30px;
    letter-spacing:0;
    font-weight: bold;
  }

  #flat_fee_text_1 {
    color: #0040d2;
    height: 38px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0;
    display: inline-block;
  }

  #flat_fee_text_2 {
    color: #0040d2;
    height: 38px;
    font-size: 18px;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
  }

  #commission_text_1 {
    color: #000000;
    height: 38px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0;
    display: inline-block;
  }

  #commission_text_2 {
    color: #000000;
    height: 38px;
    font-size: 18px;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
  }

  .Hossein-Fard {
    width: 70%;
    margin: 0 auto;
    padding-top: 50px;
  }

  .button-form {
    width: 20%;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 1439px)
    {
      width: 20%;
    }
    @media (max-width: 1150px)
    {
      width: 25%;
    }
    @media (max-width: 600px)
    {
      width: 30%;
    }
    @media (max-width: 400px)
    {
      width: 40%;
    }
  }

  #button {
    background-color:#0040d2;
    height:60px;
    border-top-left-radius:55px;
    border-top-right-radius:55px;
    border-bottom-left-radius:55px;
    border-bottom-right-radius:55px;
  }

  #button_text {
    color:rgba(255, 255, 255, 1);
    font-family:SFUIText-Regular;
    text-align:center;
    font-size:27px;
    line-height:61px;

    @media (max-width: 1439px)
    {
      font-size: 22px;
    }
  }

  #Hossein_Fard_text {
    color:#868585;
    height:20px;
    font-size:25px;
    line-height:20px;
  }

  #star_group {
    display: inline-block;
  }
  .star {
    width:35px;
    height:33.93939208984375px;
    background-image:url("~assets/images/star.png");
    background-repeat:no-repeat;
    display: inline-block;
  }

  #google {
    width:56px;
    height:54px;
    background-image:url("~assets/images/google.png");
    background-repeat:no-repeat;
    display: inline-block;
    float: right;
  }

  #post {
    color:rgba(134.00000721216202, 133.00000727176666, 133.00000727176666, 1);
    font-size:16px;
  }
 
  @media screen and (max-width: 768px) {
    #cost_home_group {
      padding: 0px 30px !important;
      text-align: center;
      margin-bottom: 30px;
    }

    #inline_block_2 {
      padding: 0px 30px;
    }

    #flat_fee_text_1 {
      font-size: 26px;
    }

    #flat_fee_text_2 {
      font-size: 22px;
    }

    #commission_text_1 {
      font-size: 26px;
    }

    #commission_text_2 {
      font-size: 22px;
    }

    #detail_info_2_each_group {
      padding: 0px 60px;
    }

    #detail_info_2_text_1 {
      font-size: 22px !important;
    }

    #detail_info_2_text_2 {
      font-size: 15px !important;
    }
    #compare_stats {
      text-align: left;
      padding-bottom: 80px;
      padding-top: 30px;
    }
    #bright {
      display: inline-block;
      margin-left: 20px;
      padding-right: 50px;
    }
    #compare_title {
      font-size: 15px;
    }
    #bright_img {
      width: 185px;
      height: 100px;
      background-size: 185px, 100px;
    }
    #inline_block_1 {
      display: inline-block;
      padding: 0px 10px;
      vertical-align: top;
    }
    #fa_ring_img {
      object-fit: cover;
      margin-left: 50px;
       margin-bottom: 10px;
    }
    #fa_img_text_1 {
      color: black;
      height: 15px;
      font-size: 20px;
      letter-spacing: 0;
      font-weight: bold;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    #fa_img_text_2 {
      color: #868585;
      height: 24px;
      font-size: 15px;
      letter-spacing: 0;
      display: flex;
      justify-content: center;
      padding-top: 5px;
    }
    #fa_buck_img {
      object-fit: cover;
      margin-left: 75px;
      margin-bottom: 10px;
    }
    .image2 {
      width: 75%;
      height: 75%;
    }

    .reviews > span .text_1 {
      font-size: 31px;
    }
    .reviews > span .text_2 {
      font-size: 31px;
    }
    #Hossein_Fard_text {
      font-size: 30px;
    }
    #post[data-v-2397a710] {
      font-size: 24px;
    }
    .button-form {
      width: 18%;
    }
    #button {
      height: 60px;
    }
    #button_text {
      font-size: 26px;
      line-height: 62px;
    }
  }

  @media screen and (max-width: 660px) {
    .text {
      .text_1 {
        font-size: 17px !important;
      }
    }
    #detail_info_2_each_group {
      padding: 0px 40px;
    }
    #inline_block_2 {
      padding: 0px 5px;
    }
    .button-form {
      width: 35%;
    }
    #empty_div_1 {
      height: 0px;
    }
  }

  @media screen and (max-width: 360px) {
    #cost_home_group {
      padding: 0px 10px !important;
      text-align: left;
    }
    #compare_stats {
      text-align: left;
      padding-bottom: 0px;
    }
    #bright {
      display: inline-block;
      margin-left: 15px !important;
      padding-right: 0px;
    }
    #compare_title {
      font-size: 6px;
    }
    #bright_img {
      margin-left: 0px;
      width: 90px;
      height: 45px;
      background-size: 90px 45px;
    }
    #inline_block_1 {
      display: inline-block;
      padding: 0px 10px;
      vertical-align: top;
    }
    
    .blue-money, .sold, .post-closing {

    }

    #fa_ring_img, #fa_buck_img {
      width: 25px !important;
      height: 25px;
      background-size: 25px 25px !important;
    }
    #fa_img_text_1 {
      color: black;
      height: 15px;
      font-size: 10px;
      letter-spacing: 0;
      font-weight: bold;
      display: flex;
      justify-content: center;
    }
    #fa_img_text_2 {
      color: #868585;
      height: 24px;
      font-size: 7px;
      letter-spacing: 0;
      display: flex;
      justify-content: center;
      padding-top: 5px;
    }
    .star {
      width: 20px;
      height: 18px;
      background-size: 20px 18px;
    }
    #google {
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }
    #detail_info_2_each_group {
      padding: 0px 20px !important;
    }
  }

  @media screen and (max-width: 375px) {
    .blue-money, .sold, .post-closing {
      width: 35px;
      height: 35px;
      background-size: 35px 35px;
    }

    .cost-home {
      padding-top: 30px;
    }

    #compare_stats {
      text-align: left;
      padding-bottom: 0px;
    }

    #bright {
      display: inline-block;
      margin-left: 20px;
      margin-top: -5px;
    }
    #compare_title {
      font-size: 8px;
    }
    #bright_img {
      margin-left: 0px;
      width: 90px;
      height: 45px;
      background-size: 100% 100%;
    }
    #inline_block_1 {
      display: inline-block;
      padding: 0px 10px;
      vertical-align: top;
    }
    #fa_ring_img {
      width: 25px;
      height: 25px;
      background-size: 25px 25px;
      margin-left: 25px;
      margin-bottom: 10px;
    }
    #fa_img_text_1 {
      color: black;
      height: 15px;
      font-size: 10px;
      letter-spacing: 0;
      font-weight: bold;
      display: flex;
      justify-content: center;
    }
    #fa_img_text_2 {
      color: #868585;
      height: 24px;
      font-size: 7px;
      letter-spacing: 0;
      display: flex;
      justify-content: center;
      padding-top: 5px;
    }
    #fa_buck_img {
      width: 25px;
      height: 25px;
      background-size: 25px 25px;
      margin-left: 35px;
      margin-bottom: 10px;
    }
    .star {
      width: 20px;
      height: 18px;
      background-size: 20px 18px;
    }
    #google {
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }

    .block-img 
    {
      .image1 {
        height: 250px !important;
      }
    }

    .text {
      text-align: left;
      padding-left: 20px;
      padding-right: 10px;

      .text_1 {
        font-size: 15px !important;
      }
      .text_2 {
        font-size: 13px;
        font-weight: normal;
      }
    }

    #detail_info_1 {
      height: 195px;
    }

    #photo {
      left: 8%;
      top: 38px;
      width: 150px;
      height: 150px;
      background-size: 150px 150px;
    }

    #hosage {
      margin-left: calc(8% + 160px);
      margin-top: 85px;
    }

    #hosage_link {
      font-size: 15px;
      margin-bottom: -0.5rem;
    }

    #hosage_listing {
      font-size: 15px;
    }

    #stats_text {
      font-size: 20px;
    }

    #detail_info_2 {
      padding-top: 20px;
    }

    #detail_info_2_each_group {
      padding: 0px 22px;
    }

    .image2 {
      height: 100%;
    }

    #detail_info_2_text_1 {
      font-size: 13px !important;
    }

    #detail_info_2_text_2 {
      font-size: 10px !important;
    }

    #cost_home {
      font-size: 23px;
    }

    .reviews {
      .text_1 {
        font-size: 25px !important;
      }
      .text_2 {
        font-size: 15px !important;
      }
    } 

    #cost_home_group {
      padding: 0px 18px;
      text-align: center;
    }

    #inline_block_2 {
      padding: 0px 0px;
      margin-right: 3px;
    }

    #flat_fee_text_1, #commission_text_1{
      font-size: 13px;
    }

    #flat_fee_text_2, #commission_text_2 {
      font-size: 12px;
    }

    .Hossein-Fard {
      padding-top: 20px;
    }

    #Hossein_Fard_text {
      font-size: 14px;
    }

    #post {
      font-size: 15px;
    }

    #flow {
      width: 100px;
    }

    #empty_div_1 {
      height: 0px;
    }

    #empty_div_2 {
      height: 50px;
    }

    .button-form {
      width: 40%;
    }

    #button {
      height: 45px;
    }

    #button_text {
      line-height: 47px;
      font-size: 20px;
    }
  }
</style>

<template>
  <div class="sellers-guide">
    <div class="block-img">
      <div class="play-image-group">
        <img class="image1" src="~assets/images/resturant.png" alt="">
        <div class="play">
            <img @click="playVideo" class="image3" src="~assets/images/player.png" alt="">
        </div>
      </div>
      <div class="after"></div>
    </div>

    <div class="text">
      <span>
        <p class="text_1">Our Listing Specialists sell faster than the average agent in Bright MLS,<br>while helping you save thousands!</p>
        <!-- <p class="text_2">while helping you save thousands!</p> -->
      </span>
    </div>

    <div id="detail_info_1">
      <div id="photo"></div>
      <div id="hosage">
        <div id="hosage_titles">
          <span id="hosage_link">Lymaris Hosage<hr id="hosage_line"></span>
          <span id="hosage_listing">VP Listing Specialist</span>
        </div>
      </div>
    </div>
    <div id="stats">
      <div class="stats-content">
        <span id="stats_text">All Time Stats</span><br>
        <span style="color: #868585;"><i>Updates as of 08.11.2020</i></span>
      </div>
    </div>
    <div id="detail_info_2">
      <div id="detail_info_2_each_group">
        <div class="blue-money"></div>
        <span id="detail_info_2_text_1">$29,447,440</span>
        <span id="detail_info_2_text_2">Sales Volume</span>
      </div>
      <div id="detail_info_2_each_group">
        <div class="sold"></div>
        <span id="detail_info_2_text_1">70</span>
        <span id="detail_info_2_text_2">Listings Sold</span>
      </div>
      <div id="detail_info_2_each_group">
        <div class="post-closing"></div>
        <span id="detail_info_2_text_1">20</span>
        <span id="detail_info_2_text_2">Current Listings</span>
      </div>
      <!-- <div id="detail_info_2_each_group">
        <span id="detail_info_2_text_1">58</span>
        <span id="detail_info_2_text_2">AVERAGE DAYS ON MARKET</span>
      </div> -->
      <!-- <hr id="detail_info_2_line"> -->
    </div>

    <!-- <div id="compare_stats">
      <div id="bright">
        <div>
          <span id="compare_title">COMPARE OUR STATS WITH</span>
        </div>
        <div id="bright_img"></div>
      </div>
      <div id="inline_block_1">
        <div id="fa_ring_img"></div>
        <div>
          <span id="fa_img_text_1">98.36%</span>
          <span id="fa_img_text_2">SOLD TO LIST PRICE %</span>
        </div>
      </div>
      <div id="inline_block_1">
        <div id="fa_buck_img"></div>
        <div>
          <span id="fa_img_text_1">68</span>
          <span id="fa_img_text_2">AVERAGE DAYS ON MARKET</span>
        </div>
      </div>
    </div> -->

    <div class="cost-home">
      <span id="cost_home">Cost to list your home</span>
    </div>

    <div id="cost_home_group">
      <div id="inline_block_2">
        <span id="flat_fee_text_1">$1,000 flat fee</span>
        <span id="flat_fee_text_2">Federa Listing Specialist</span>
      </div>
      <div id="inline_block_2">
        <span id="commission_text_1">2.5% ~ 0.3% commission</span>
        <span id="commission_text_2">Traditional Agent</span>
      </div>
    </div>

    <div class="block-img">
      <img class="image2" src="~assets/images/federa_home.jpg" alt="">
    </div>

    <div class="reviews">
      <span>
        <p class="text_1">Client reviews</p>
        <p class="text_2"><i style="font-weight: bold;">* Federa</i><i>&nbsp;formally (Federa Realty).</i></p>
      </span>
    </div>

    <div class="Hossein-Fard">
      <div style="margin-bottom: 10px;">
        <span id="Hossein_Fard_text">Hossein Ghodosi Fard</span>
      </div>
      <div id="star_group">
        <div id="star1" class="star"></div>
        <div id="star2" class="star"></div>
        <div id="star3" class="star"></div>
        <div id="star4" class="star"></div>
        <div id="star5" class="star"></div>
      </div>
      <div id="google"></div>
    </div>
    <client-only>
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
    </client-only>
    <div id="empty_div_1"></div>
    <div class="button-form">
      <div id="button"><span id="button_text">Get Started</span></div>
    </div>
    <div id="empty_div_2"></div>

  </div>


</template>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides';
  import 'vueperslides/dist/vueperslides.css';

  export default {
    layout: 'admin',
    components: {
      VueperSlides, VueperSlide
    },
    methods: {
      playVideo() {
        $('.play-image-group').remove();
        if($(window).width() == 375 || $(window).width() == 360)
        {
          $('.after').after('<iframe @click="stopVideo" width="100%" height="250px" src="https://www.youtube.com/embed/rtrBCLQ32io?byline=0&portrait=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
        else if($(window).width() == 660)
        {
          $('.after').after('<iframe @click="stopVideo" width="100%" height="400px" src="https://www.youtube.com/embed/rtrBCLQ32io?byline=0&portrait=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
        else {
          $('.after').after('<iframe @click="stopVideo" width="100%" height="700px" src="https://www.youtube.com/embed/rtrBCLQ32io?byline=0&portrait=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
      },
    }
  }
</script>

