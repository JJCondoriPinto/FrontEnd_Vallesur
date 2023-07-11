<template>
    <div class="card-remind w-100">
        <div class="card">
            <div class="card-header">
                Recordatorios
            </div>
            <div class="card-body">
                <div class="reminds gap-1">
                    <div
                      class="remind alert alert-warning alert-dismissible fade show"
                      role="alert"
                      v-for="remind in reminds" :key="remind._id"
                    >
                      <strong>{{remind.titulo}}</strong> <br />
                      <p>{{remind.descripcion}}</p>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        v-on:click="deleteRemind(remind._id)"
                      ></button>
                      </div>
                </div>
            </div>
        </div>
    </div>

<div class="modal fade" id="newRemind" tabindex="-1" aria-labelledby="newRemindLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="newRemindLabel">Nuevo recordatorio</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="minRemind()"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="remind-name" class="col-form-label">Titulo:</label>
            <input type="text" class="form-control" id="remind-name" v-model="this.reminds[this.reminds.length-1].titulo">
          </div>
          <div class="mb-3">
            <label for="description-text" class="col-form-label">Description:</label>
            <textarea class="form-control" id="description-text" v-model="this.reminds[this.reminds.length-1].descripcion"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="minRemind()">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="insertRemind()" data-bs-dismiss="modal">Generar recordatorio</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>

    import axios from 'axios'

    export default {
        name: 'RemindersHomeComponent',
        data() {
            return {
                reminds: [{
                    titulo: "",
                    descripcion: "",
                }]
            } 
        },
        created() {
            axios.get("api/home/remind")
            .then(res => {
              this.reminds = res.data.data.length > 0 ? res.data.data : [{ titulo: "", descripcion: "" }];
            })
        },
        methods: {
            addRemind() {
                this.reminds.push({
                    titulo: "",
                    descripcion: ""
                });
            },
            insertRemind() {
                axios.post('api/home/remind', this.reminds[this.reminds.length-1])
            },
            minRemind() {
                this.reminds.pop();
            },
            deleteRemind(id) {
                axios.delete(`api/home/remind/${id}`);
            }
        }
    }
</script>