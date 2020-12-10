<template>
    <div class="spage">
        <div class="header">
            Let’s get your property details
        </div>
        <div class="sform">
            <div class="form-label">1. Property Address</div>
            <PropertyAddressForm/>
        </div>

        <div class="sform">
            <div class="form-label">2. Property Detail</div>
            <PropertyDetailForm/>
        </div>

        <div class="sform">
            <div class="form-label">3. Floor plan</div>
            <FloorPlan/>
        </div>

        <div class="actions">
            <el-button type="primary" size="medium" round style="margin-bottom: 50px;">Continue</el-button>
        </div>
    </div>
</template>

<script>
    import PropertyAddressForm from "./PropertyAddressForm";
    import PropertyDetailForm from "./PropertyDetailForm";
    import FloorPlan from "./FloorPlan";

    export default {
        layout: 'admin',
        name: 'index',
        components: {
            PropertyAddressForm,
            PropertyDetailForm,
            FloorPlan
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        font-family: 'sfuitext-bold';
    }
</style>