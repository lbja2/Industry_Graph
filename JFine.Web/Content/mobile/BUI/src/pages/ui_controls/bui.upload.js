loader.define(function(require,exports,module) {

    // 拍照上传
    var $facePhoto = $("#buiPhoto");
    var uiUpload = bui.upload();
    

    // 上拉菜单 js 初始化: 
    var uiActionsheet = bui.actionsheet({
      trigger: "#btnUpload",
      buttons: [{ name:"拍照上传",value:"camera" },{ name:"从相册选取",value:"photo" }],
      callback: function (e) {
        var ui = this;
        var val = $(e.target).attr("value");
        switch( val ){
            case "camera":
            ui.hide();
            uiUpload.add({
                "from": "camera",
                "onSuccess": function (val,data) {
                    var url = window.URL.createObjectURL(val[0]);
                    $facePhoto.prepend(templatePhoto(url))
                    // 展示base64本地图片
                    // this.toBase64({
                    //     onSuccess: function (url) {
                    //         $facePhoto.prepend(templatePhoto(url))
                       
                    //     }
                    // });


                    // 也可以直接调用start上传图片
                }
            })
            
            break;
            case "photo":
            ui.hide();
            uiUpload.add({
                "from": "",
                "onSuccess": function (val,data) {
                    var url = window.URL.createObjectURL(val[0]);
                    $facePhoto.prepend(templatePhoto(url))
                    // 展示base64本地图片
                    // this.toBase64({
                    //     onSuccess: function (url) {
                    //         $facePhoto.prepend(templatePhoto(url))
                       
                    //     }
                    // });


                    // 也可以直接调用start上传图片
                }
            })

            break;
            case "cancel":
            ui.hide();
            break;
        }
      }
    })
    
    function templatePhoto(url) {
        return `<div class="span1">
                <div class="bui-upload-thumbnail"><img src="${url}" alt="" /><i class="icon-removefill"></i></div>
            </div>`
    }


    
    // 选择图片文件
    $("#getSelect").on("click",function (argument) {

        bui.alert( uiUpload.data() );

    })
    
    // 选择图片文件
    $facePhoto.on("click",".icon-removefill",function (e) {
        uiUpload.clear();

        $(this).parents(".span1").remove();
        e.stopPropagation();

    })

    // 删除选择的文件
    $("#removeSelect").on("click",function (argument) {

        uiUpload.remove("resize.jpg");

    })
    // 删除选择的文件
    $("#removeAllSelect").on("click",function (argument) {

        uiUpload.clear();

    })

    // 上传图片
    $("#upload").on("click",function (argument) {
        uiUpload.start({
            url:"http://eid.bingosoft.net:83/share/apis/upload/image",
            // url: "https://www.swla.com.cn/demo/upload.asp",
            // url:"http://10.201.78.23:81/dataservice.ashx?CommandName=Atd$ImgUpLoad",
            onSuccess:function (data) {
                console.log(data)
                //显示上传以后的图片
            },
            onFail:function (data) {
                bui.alert(data)
            }
        })

    })
    // 停止上传
    $("#stopUpload").on("click",function (argument) {

        uiUpload.stop();

    })


})
