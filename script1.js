const delete = document.querySelector("delete");
delete.addEventListener ('click', e => {
    lists = lists.filter(list => list.id !== selectedListId) 
    selectedListId = null
   )

    const task = document.querySelector("div");
    list.addEventListener(
        'click',
        function (ev) {
            if (ev.target.tagName === "edit") {
                ev.target.classList.toggle("checked");
            }
        },
        false,
    );

