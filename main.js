$(document).ready(function() {
    $('form button').click(function(e) {
        e.preventDefault();
        const tarefas = $('#tarefa').val();
        const novaTarefa =  $('<li></li>');
        $(`
        <p class="paragrafo"> ${tarefas}
        </p>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('');
    })

    $('ul').on('click', 'p.paragrafo', function() {
        $(this).css('text-decoration', 'line-through');
        $(this).css('color','rgba(10, 211, 10, 0.677)');
    });
}); 
