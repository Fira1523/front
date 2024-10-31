<template>
    <nav class="width-full shadow-md sticky top-0 bg-white">
        <div>
            <img src="\telebirlogo.svg" class="w-32">
        </div>

    </nav>
    <div>
        <h1 class="font-bold text-cyan-600 mt-10 ml-10">Topup</h1>
        <p class="text-cyan-600 ml-14 font-bold">workdiator</p>
        <p class="text-amber-400 font-bold ml-14"> {{ depositAmount }}</p>
        <p class="text-cyan-600 ml-14 font-bold text-sm">2024-28-09</p>
    </div>
    <div class="flex -mt-28">
        <div class="ml-40">
            <div class="shadow-md w-96 p-10 bg-gray ml-96">
                <p class="text-amber-400 font-bold text-center "> {{ depositAmount }}</p>
                <p class="text-cyan-600 text-center mb-5 font-bold">Scan to pay( {{ depositAmount }})</p>
                <!-- <img src="\telebirQRcode.jpg" class="w-64 ml-6"> -->
                <qrcode-vue :value="display" size="300"></qrcode-vue>

                <hr class="text-zinc-200 mt-4 mb-5">
                <div class="flex ">
                    <div class="ml-8 mr-4 mt-1">
                        <img src="\teleQRscan.jpg" class="w-8">
                    </div>
                    <div class="text-sm font-bold ">
                        Turn on the <br>telebirr App and <br> scan the code<br>
                        <span class="text-cyan-600">For the First time, please</span>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <img src="" alt="">
        </div>
    </div>
    <div class="shadow-lg w-full mt-4 h-40 mb-10  bg-white flex">
        <div class=" mb-20 ">
            <div class="ml-96 pt-9">
                <img src="\contact  center.jpg" class="w-10">
                <p class=" font-semibold">telebirr Contact Center</p>
                <p class="text-cyan-600 font-semibold">+251 127</p>
            </div>

        </div>
        <div class="ml-96 mt-6">
            <img src="\telebirrglob.jpg" class="w-10">
            <p class="font-semibold">Ethio Telecom Web</p>
            <a class="text-cyan-600 font-semibold underline">www.ethiotelecom.et</a>
        </div>

    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  props: {
  },
  mounted(){
console.log('userrrrr')
  },
    components: {
        QrcodeVue
    },
    created() {
        this.depositAmount = this.$route.query.amount
    },
    data() {
        return { 
            depositAmount: 0,
        }
    },

    computed: {
        display() {
            return 'http://192.168.174.21:5173/Telebirr-Verify?amount=' + this.depositAmount + '&user=' + localStorage.getItem('user_id'); 
        }
    }

}
</script>

<style></style>