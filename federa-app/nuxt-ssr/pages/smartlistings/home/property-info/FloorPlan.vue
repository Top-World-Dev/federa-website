<template>
    <el-form>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="Upper 2">
                    <el-input v-model="upper2"/>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Upper 1">
                    <el-input v-model="upper1"/>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="Ground (main floor)">
                    <el-input v-model="ground"/>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Lower 2 (basement)">
                    <el-input v-model="lower2"/>
                </el-form-item>
            </el-col>
        </el-row>

        <el-row>
            <el-form-item label="Note">
                <el-input v-model="note" rows="6" type="textarea"/>
            </el-form-item>
        </el-row>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            upper2: '',
            upper1: '',
            ground: '',
            lower2: '',
            note: '',
        }
    }
}
</script>
