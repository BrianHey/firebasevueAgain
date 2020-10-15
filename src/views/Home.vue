<template>
  <div>
    <el-table :data="actividades" style="width: 60%; margin: auto">
      <el-table-column prop="data.activity" label="Actividad" width="120">
      </el-table-column>
      <el-table-column prop="data.date" label="Fecha" width="520">
      </el-table-column>
      <el-table-column prop="data.time" label="Hora" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="Operaciones" width="120">
        <template slot-scope="scope">
          <el-button @click="eliminar(scope.$index)" type="text" size="small"
            >Eliminar</el-button
          >
          <el-button type="text" size="small" @click="open(scope.$index)">Editar</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Editar una actividad" :visible.sync="outerVisible">

      <Form @close="close" :actividad="actividadEditing" />


    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Form from '@/components/Form.vue'
export default {
  components:{ Form},
  methods: {
    ...mapActions(["deleteActivity"]),
    eliminar(i) {
      let id = this.actividades[i].id;
      this.deleteActivity(id);
    },

    open(i){
      this.outerVisible = true
      this.actividadEditing = this.actividades[i]
    },

    close(){
      this.outerVisible = false
    }
  },
  computed: {
    ...mapState(["actividades"]),
  },
  data() {
    return {
      outerVisible: false,
      actividadEditing: {}
    };
  },
};
</script>
