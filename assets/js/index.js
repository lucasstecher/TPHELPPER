$("#add_user").submit(function(event){
    alert("Dados inseridos com sucesso!");

    location.href='/';
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url":`https://tphelpper.herokuapp.com/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Dados atualizados com sucesso!");
        location.href='/';
    })

})

if(window.location.pathname == "/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id =$(this).attr("data-id")

        var request = {
            "url":`https://tphelpper.herokuapp.com/api/users/${id}`,
            "method":"DELETE"
        }

        if(confirm("Você realmente quer deletar estes dados?")){
            $.ajax(request).done(function(response){
                alert("Dados deletados com sucesso!");
                location.reload()
            })
        }

    })
}