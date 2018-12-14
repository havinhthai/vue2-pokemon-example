<template>
    <div :class="`alert alert-${alertType}`" role="alert" v-if="isAlertShow">
        {{ message }}
    </div>
</template>

<script>
    export default {
        props: {
            alertType: {
                type: String,
                default: 'primary',
            },
            message: {
                type: String,
                default: '',
            },
            isShow: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            isAlertShow:  function() {
                return this.isShow;
            },
        },
        updated: function() {
            // this.isAlertShow = true;
            if (this.isAlertShow) {
                // Hidden alert
                setTimeout(() => {
                    this.isAlertShow = false;
                }, 2000);
            }
        },
    }
</script>
