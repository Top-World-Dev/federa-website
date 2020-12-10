<template>
  <el-form>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Year Property Built">
          <el-input v-model="yearbuilt" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Number of levels">
          <el-input v-model="levels" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Basement">
          <el-checkbox-group v-model="Basement">
            <el-checkbox label="Option A"></el-checkbox>
            <el-checkbox label="Option B"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Basement entrance type">
          <el-input v-model="basement_entrance" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Basement type">
          <el-input v-model="basement_type" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Preferred Listing Price (USD) (optional)">
          <el-input v-model="price" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Hot water type">
          <el-checkbox-group v-model="hot_water_type">
            <el-checkbox label="Gas"></el-checkbox>
            <el-checkbox label="Electric"></el-checkbox>
            <el-checkbox label="Oil"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Number of gallons">
          <el-input v-model="number_gallons" />
          <span class="hints">of the water heater</span>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Air conditioning type">
          <el-checkbox-group v-model="air_conditioning_type">
            <el-checkbox label="Gas"></el-checkbox>
            <el-checkbox label="Electric"></el-checkbox>
            <el-checkbox label="Oil"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Air conditioning type">
          <el-checkbox-group v-model="air_conditioning_type_2">
            <el-checkbox label="Gas"></el-checkbox>
            <el-checkbox label="Electric"></el-checkbox>
            <el-checkbox label="Oil"></el-checkbox>
            <el-checkbox label="Heat Pump"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Water Supply">
          <el-checkbox-group v-model="water_supply">
            <el-checkbox label="Public"></el-checkbox>
            <el-checkbox label="Private Well"></el-checkbox>
            <el-checkbox label="Community Well"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Sewage Disposal">
          <el-checkbox-group v-model="sewage_disposal">
            <el-checkbox label="Public"></el-checkbox>
            <el-checkbox label="Septic"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Buyers Agent Compensation">
          <el-input v-model="Agent_Compensation" />
          <span class="hints">
            We recommend 2.5-3%. *Note this is the buyer's agent commission and
            does not go to Federa.
          </span>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Association">
          <el-checkbox-group v-model="association">
            <el-checkbox label="Condo"></el-checkbox>
            <el-checkbox label="HOA"></el-checkbox>
            <el-checkbox label="Neither"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Condo/Co-op/HOA Name">
          <el-input v-model="Condo_Co_Hoa" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Frequency of HOA dues">
          <el-input v-model="Frequency" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="HOA Amenities">
          <el-input v-model="HOA_Amenities" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="HOA Inclusions (utilties/trash/snow removal)">
          <el-input v-model="HOA_Inclusions" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item class="slabel" label="Mortgage on home">
          <el-checkbox-group v-model="mortgage_on_home">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Approximate Mortgage Amount">
          <el-input v-model="Mortgage_Amount" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Mortgage Bank">
          <el-input v-model="Mortgage_Bank" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Current on all payments?">
          <el-checkbox-group v-model="current_on_all_payment">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Parking">
          <el-checkbox-group v-model="parking">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Conveyances list : Alarm system?">
          <el-checkbox-group v-model="alarm_system">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Window treatments">
          <el-checkbox-group v-model="window_treatments">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Built in Microwave">
          <el-checkbox-group v-model="built_in_microwave">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Ceiling Fan(s)">
          <el-checkbox-group v-model="ceiling_fan">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Number of Ceiling Fans">
          <el-input v-model="Ceiling_Fans" />
        </el-form-item>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Washing Machine">
          <el-checkbox-group v-model="washing_machine">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Drying Machine">
          <el-checkbox-group v-model="drying_machine">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Stove">
          <el-checkbox-group v-model="stove">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Dish washer">
          <el-checkbox-group v-model="dish_washer">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Garbage disposer">
          <el-checkbox-group v-model="garbage_disposer">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Additional Frezer">
          <el-checkbox-group v-model="additional_frezer">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item class="slabel" label="Fireplace">
          <el-checkbox-group v-model="fireplace">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="Yes w / Screen"></el-checkbox>
            <el-checkbox label="Yes w / Gas log"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item class="slabel" label="Garage Opener">
          <el-checkbox-group v-model="garage_opener">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="Yes w / remote"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Intercom">
          <el-checkbox-group v-model="intercom">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="Yes No / remote"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item class="slabel" label="Playground Equipment">
          <el-checkbox-group v-model="playground_equipment">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="Yes No / remote"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item class="slabel" label="Refrigerator">
          <el-checkbox-group v-model="refrigerator">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="Yes No / ice maker"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item class="slabel" label="Storage Shed">
          <el-checkbox-group v-model="storage_shed">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="Yes No / remote"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="“As-Is” Items">
          <el-input v-model="As_Is_Items" />
          <span class="hints">Are there only items in this list that are going to convey “as-is”</span>
        </el-form-item>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item class="slabel" label="Is your property tenant occupted?">
          <el-checkbox-group v-model="tenant">
            <el-checkbox label="Yes"></el-checkbox>
            <el-checkbox label="No"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Termination of lease Date">
          <el-input v-model="Termination_Date" />
          <span class="hints">
            MM/DD/yyyy
            <br />If answered yes to tenants occupted enter date of termination of lease
          </span>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      Basement: [],
      yearbuilt: '',
      levels: '',
      basement_entrance: '',
      basement_type: '',
      price: '',
      number_gallons: '',
      Agent_Compensation: '',
      Condo_Co_Hoa: '',
      Frequency: '',
      HOA_Amenities: '',
      HOA_Inclusions: '',
      Mortgage_Amount: '',
      Mortgage_Bank: '',
      Ceiling_Fans: '',
      As_Is_Items: '',
      Termination_Date: '',
      hot_water_type: [],
      air_conditioning_type: [],
      air_conditioning_type_2: [],
      water_supply: [],
      sewage_disposal: [],
      association: [],
      mortgage_on_home: [],
      current_on_all_payment: [],
      parking: [],
      alarm_system: [],
      window_treatments: [],
      built_in_microwave: [],
      ceiling_fan: [],
      washing_machine: [],
      drying_machine: [],
      stove: [],
      dish_washer: [],
      garbage_disposer: [],
      additional_frezer: [],
      fireplace: [],
      garage_opener: [],
      intercom: [],
      playground_equipment: [],
      refrigerator: [],
      storage_shed: [],
      tenant: []
    }
  }
}
</script>
