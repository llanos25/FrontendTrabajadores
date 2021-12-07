new Vue({
    el:"#app",
    data(){
        return{
            id:"",
            nombre:"",
            apellido:"",
            telefono:"",
            correo:"",
            datosconsulta:{},
            ideliminar:"",
        }
    },

    methods:{
        guardarTrabajador(){
            const endpoint="http://localhost:8080/trabajador";
            const opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({id:this.id,nombre:this.nombre,apellido:this.apellido,telefono:this.telefono,correo:this.correo})
            };
            fetch(endpoint,opciones).then(async response=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El cliente ha sido guardado',
                    showConfirmButton: false,
                    timer: 2500
                  })
            });
            this.consultarTrabajador();
            
        },
        consultarTrabajador(){
            const endpoint="http://localhost:8080/trabajador/";
            const opciones={method:'GET'};
            fetch(endpoint).then(async response=>{
                this.datosconsulta=await response.json();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'La consulta ha sido realizada',
                    showConfirmButton: false,
                    timer: 2500
                  })
            })
        },
        eliminarTrabajador(){
            const endpoint="http://localhost:8080/trabajador/"+this.ideliminar;
            const opciones={method:'DELETE'};
            fetch(endpoint,opciones).then(async response=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cliente eliminado',
                    showConfirmButton: false,
                    timer: 2500
                  });
                this.ideliminar="";
                this.consultarTrabajador();
                
            })

        }

    }
})