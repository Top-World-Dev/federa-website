<template>
  <div class="faqs">
    <div class="header">
      <div class="header__text">
        <span>
          <p class="header__text__1">Our most frequently asked questions and answers.</p>
          <p class="header__text__2">
            Can't find it here?
            <br />Chat with a live Listing Specialist!
          </p>
        </span>
      </div>
    </div>
    <div class="top-search">
      <el-input prefix-icon="el-icon-search" placeholder="Top Questions"></el-input>
    </div>
    <el-row class="el-row-content">
      <el-collapse accordion>
        <div class="el-timeline-custom" v-for="(route, index) in faqs" :key="index">
          <el-collapse-item :title="route.label" :name="route.name">
            <div>{{route.content}}</div>
          </el-collapse-item>
        </div>
      </el-collapse>
    </el-row>
    <el-row class="start-button">
      <el-button class="button" type="primary" round>Get Started</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  name: 'index',
  components: {},
  data() {
    return {
      faqs: [
        {
          name: '1',
          label: 'What is Smart Listings?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        },
        {
          name: '2',
          label: 'Are you a licensed brokerage?',
          content: 'Yes. We are a licensed real estate brokerage.'
        },
        {
          name: '3',
          label: 'How many homes have you soid?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        },
        {
          name: '4',
          label: 'What markets do you service?',
          content: 'Yes. We are a licensed real estate brokerage.'
        },
        {
          name: '5',
          label: 'Is signage included?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        },
        {
          name: '6',
          label: 'Is my home listed on the MLS?',
          content: 'Yes. We are a licensed real estate brokerage.'
        },
        {
          name: '7',
          label: 'Who provides home pictures?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        },
        {
          name: '8',
          label: 'Do you have open houses?',
          content: 'Yes. We are a licensed real estate brokerage.'
        },
        {
          name: '9',
          label: 'Do you also help people looking to buy?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        },
        {
          name: '10',
          label: 'Are you a limited service brokerage?',
          content: 'Yes. We are a licensed real estate brokerage.'
        },
        {
          name: '11',
          label: 'What is your payment policy?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        },
        {
          name: '12',
          label: 'How do you sell my home?',
          content: 'Yes. We are a licensed real estate brokerage.'
        },
        {
          name: '13',
          label: 'I am ready to list now what?',
          content:
            'It is the home selling process that uses the most experienced agents, technology, and data to sell homes with the least amount of stress for a flat fee of $1,000.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faqs {
  font-family: 'SFUIText-Regular';

  .header {
    height: 162px;
    background-image: url('~assets/images/background-blue-image.png');
    padding: 0 20px;
    margin-left: -20px;
    margin-top: -20px;
    margin-right: -20px;
    padding-left: 70px;

    @media (max-width: 375px) {
      padding-left: 35px;
      height: 175px;
    }

    &__text {
      color: white;
      letter-spacing: -0.24px;

      @media (max-width: 660px) {
      }

      &__1 {
        font-weight: bold;
        font-size: 22px;
        padding-top: 30px;
        @media (max-width: 660px) {
          font-size: 20px;
        }
        @media (max-width: 375px) {
          font-size: 18px;
        }
      }
      &__2 {
        font-size: 17px;
        @media (max-width: 660px) {
          font-size: 15px;
        }
        @media (max-width: 375px) {
          font-size: 13px;
        }
      }
    }
  }

  .top-search {
    width: 65%;
    margin: 0 auto;
    margin-top: 30px;
    @media (max-width: 660px) {
      width: 90%;
    }
  }

  .el-row-content {
    width: 90%;
    margin: 20px auto 50px;
    @media (max-width: 660px) {
      width: 95%;
    }

    .el-collapse {
      border: none;

      .el-collapse-item {
        margin-bottom: 10px;
        @media (max-width: 660px) {
          padding: 5px;
          border: 1px solid #868585;
          border-radius: 15px;
        }
      }
    }
  }

  .start-button {
    text-align: center;
    margin-bottom: 50px;

    .button {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>