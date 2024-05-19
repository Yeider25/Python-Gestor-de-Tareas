$(document).ready(function() {
    $(document).on('click', '#btnActualizar', function() {
        cargarmodal("templates/Editar_tarea.html");
    });

    $(document).on('click', '#Boton_listar_usuarios', function() {
        cargarmodal("templates/Listar_usuarios.html");
    });

    $(document).on('click', '#Boton_listar_tareas', function() {
        cargarmodal("templates/Listar_tareas.html");
    });
});

function cargarmodal(ruta) {
    $("#modal-container").load(ruta, function() {
        $("#Mtareas").modal("show");
    });
}