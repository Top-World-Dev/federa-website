<style lang="scss" scoped>
    .seller-info {
        padding: 70px 150px;
        @media(max-width: 660px){
            padding:20px 15px;
            font-family: 'SFUIText-Regular';
        }
        .header {
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 30px;
        }

        .contact-info-form {
            margin-bottom: 25px;
            .form-label {
                font-size: 18px;
                margin-bottom: 20px;
                 @media(max-width: 660px){
                    font-size: 14px;
                }
            }
        }

        .actions {
            display: flex;
            flex-direction: row-reverse;
        }
    }
</style>

<template>
    <div class="seller-info">
        <div class="header">
            Your contact info
        </div>
        <div class="contact-info-form">
            <div class="form-label">Seller 1 Contact info</div>
            <SellerContactForm/>
        </div>

        <div class="contact-info-form">
            <div class="form-label">Seller 2 Contact info (this is optional)</div>
            <SellerContactForm/>
        </div>

        <div class="actions">
            <el-button type="primary" size="medium" round style="margin-bottom: 50px;">Continue</el-button>
        </div>
    </div>
</template>

<script>
    import SellerContactForm from "./SellerContactForm";

    export default {
        layout: 'admin',
        components: {
            SellerContactForm
        }
    }
</script>


