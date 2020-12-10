<template>
  <el-form>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Street Address">
          <el-input v-model="Street1"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Street Address Line 2">
          <el-input v-model="Street2"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="City">
          <el-input v-model="City"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="State / Province">
          <el-input v-model="State"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Postal / Zip Code">
          <el-input v-model="Postal"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Country">
          <el-select class="s_el-select" v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      value: '',
      Street1: '',
      Street2: '',
      City: '',
      State: '',
      Postal: ''
    }
  }
}
</script>

<style lang="scss">
.form-label {
  font-size: 19px !important;
}

.el-form-item {
  &__label {
    font-size: 18px !important;
  }
}
</style>
