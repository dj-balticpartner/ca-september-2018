function testAjax(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        type: "GET",
        //dataType: "html",
        contentType: "json",
        success: function (response) {

            let imageArray = response;
            let h = ``;
            for(let i = 0; i < imageArray.length; i++){
                let img = imageArray[i];
                h += `
                    <article>
                    <h3>Photo #${img.id} - album [${img.albumId}]</h3>
                    <p>${img.title}</p>
                    <div class="imgWrap">
                        <img src="${img.thumbnailUrl}" class="thumbnail" data-toggle="modal" data-target="#img_${img.id}">
                        <div class="modal fade" id="img_${img.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <img src="${img.url}" >
                            </div>
                        </div>
                    </div>
                </article>
                `;
            }
            $("#result").html(h);

            //onsole.log(response);
            // $("#div1").html(response);
        }
    })
        .done(function (msg) {
            //alert("Data Saved: " + msg);
        });
}