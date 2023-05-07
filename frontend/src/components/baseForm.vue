<template>
    <div class="base-form">
        <label v-if="props.label" style="margin-left: 43px">{{ props.label }}</label>
        <div class="slider">
            <div>
                <img
                    src="../assets/intensity-change.svg"
                    alt="Quantity"
                    class="slider-icon-quantity"
                />
            </div>
            <el-slider
                v-model="quantity"
                :step="0.5"
                :min="0"
                @change="$emit('quantityChanged', quantity)"
                :max="5"
                show-stops
                style="
                    --el-slider-main-bg-color: grey;
                    --el-slider-height: 2px;
                    --el-slider-button-wrapper-offset: -17px;
                "
            ></el-slider>
        </div>
        <div class="slider">
            <div>
                <img
                    src="../assets/quality-svgrepo-com.svg"
                    alt="Quantity"
                    class="slider-icon-quality"
                />
            </div>
            <el-slider
                v-model="quality"
                :step="0.5"
                @change="$emit('qualityChanged', quality)"
                :min="0"
                :max="5"
                show-stops
                style="
                    --el-slider-main-bg-color: grey;
                    --el-slider-height: 2px;
                    --el-slider-button-wrapper-offset: -17px;
                "
            ></el-slider>
        </div>
        <div class="form-notes">
            <div>
                <el-icon :size="37"><List /></el-icon>
            </div>
            <el-input
                v-model="notes"
                autosize
                style="
                    --el-input-text-color: #ffffff;
                    --el-input-bg-color: 28282b;
                    margin-left: 4px;
                "
                type="textarea"
                class="form-notes"
                @input="$event('notesChanged', notes)"
            ></el-input>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { List } from '@element-plus/icons-vue'

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: Number
})

const quantity = ref()
const quality = ref()
const notes = ref()
</script>

<style>
.base-form {
    padding: 10px;
}
.slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
}
.slider-icon-quantity {
    margin-right: 20px;
    width: 25px;
    padding-left: 5px;
}
.slider-icon-quality {
    margin-right: 15px;
    width: 35px;
}
.form-notes {
    display: flex;
    align-items: center;
}
</style>
