<template>
  <div>
    <el-form ref="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="activity"></el-input>
      </el-form-item>

      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-select
            v-model="time"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="Select time"
          >
          </el-time-select>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Nuevo",
  data() {
    return {
      activity: "",
      date: "",
      time: "",
    };
  },
  methods: {
    ...mapActions(["setActivity"]),
    onSubmit() {
      let activity = this.activity;
      let date = this.date.toString();
      let time = this.time;

      this.setActivity({
        activity,
        date,
        time,
      });
    },
  },
};
</script>
