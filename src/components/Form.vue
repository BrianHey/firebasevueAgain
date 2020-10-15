<template>
  <div>
    <el-form ref="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="act.data.activity"></el-input>
      </el-form-item>

      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="act.data.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-select
            v-model="act.data.time"
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
        <el-button type="primary" @click="actualizar">Actualizar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    let actividad = JSON.parse(JSON.stringify(this.actividad));
    actividad.data.date = new Date(actividad.data.date)
    this.act = actividad;
  },
  props: ["actividad"],
  methods: {
    ...mapActions(["updatingActivity"]),
    actualizar() {
      let newActivity = {
        id: this.act.id,
        data: {
          activity: this.act.data.activity,
          date: this.act.data.date.toString(),
          time: this.act.data.time,
        },
      };
      this.updatingActivity(newActivity);
      this.$emit('close')
    },
  },
  data() {
    return {
      act: "",
    };
  },
};
</script>
