<template>
    <div class="form-parent card-show-parent">
        <div class="form">

            <div class="card-group form-group">
                <h3 class="text-light">Enfoca el codigo QR de la reserva</h3>
                <div class="custom">
                    <qrcode-stream @decode="onDecode" @init="onInit" class="pb-2 pt-3" />
                    <p class="text">ID ESCANEADO: <b>{{ result }}</b></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.custom {
    max-height: fit-content;
    max-width: fit-content;
}
</style>
<script>
import { QrcodeStream } from 'vue3-qrcode-reader'

export default {

    components: { QrcodeStream },

    data() {
        return {
            result: '',
            error: ''
        }
    },

    methods: {
        onDecode(result) {
            console.log(result)
           this.result = result; 
            window.location = result; 
        },

        async onInit(promise) {
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.error = "ERROR: you need to grant camera access permission"
                } else if (error.name === 'NotFoundError') {
                    this.error = "ERROR: no camera on this device"
                } else if (error.name === 'NotSupportedError') {
                    this.error = "ERROR: secure context required (HTTPS, localhost)"
                } else if (error.name === 'NotReadableError') {
                    this.error = "ERROR: is the camera already in use?"
                } else if (error.name === 'OverconstrainedError') {
                    this.error = "ERROR: installed cameras are not suitable"
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.error = "ERROR: Stream API is not supported in this browser"
                } else if (error.name === 'InsecureContextError') {
                    this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
                } else {
                    this.error = `ERROR: Camera error (${error.name})`;
                }
            }
        }
    }
}
</script>
  
<style scoped>
.error {
    font-weight: bold;
    color: red;
}
</style>