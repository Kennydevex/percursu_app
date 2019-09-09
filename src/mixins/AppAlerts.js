// jshint esversion:6
export const flashAlert = {
    methods: {
        feedback(type, msg, timer, toast, position) {
            this.$swal({
                toast: toast,
                position: position ? position : 'top-end',
                type: type,
                title: msg,
                showConfirmButton: false,
                timer: timer ? timer : 3000
            });
        },
    },
};

// export const notificationAlert = {
//     methods: {
//         notifyUser() {
//             this.$swal({
//                 type: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong!',
//                 footer: 'tesetete'
//             });
//         },
//     },
// };

export const actionAlert = {
    methods: {
        deleteAlert(type, msg, text = "Ação iurreversível, queres continuar?") {
            return this.$swal({
                title: msg,
                text: text,
                type: type,
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, Apagar!",
                cancelButtonText: "Não, Cancelar!"
            });
        },
    },
};
