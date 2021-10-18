(function() {
    /*建立模态框对象*/
    var modalBox = {};
    /*获取模态框*/
    modalBox.modal10 = document.getElementById("myModal10");
    modalBox.modal11 = document.getElementById("myModal11");
    modalBox.modal12 = document.getElementById("myModal12");
    /*获得trigger按钮*/
    modalBox.triggerBtn10 = document.getElementById("triggerBtn10");
    modalBox.triggerBtn11 = document.getElementById("triggerBtn11");
    modalBox.triggerBtn12 = document.getElementById("triggerBtn12");
    /*获得关闭按钮*/
    modalBox.closeBtn10 = document.getElementById("closeBtn10");
    modalBox.closeBtn11 = document.getElementById("closeBtn11");
    modalBox.closeBtn12 = document.getElementById("closeBtn12");
    /*模态框显示*/
    modalBox.show10 = function() {
        console.log(this.modal10);
        this.modal10.style.display = "block";
    }
    modalBox.show11 = function() {
        console.log(this.modal11);
        this.modal11.style.display = "block";
    }
    modalBox.show12 = function() {
        console.log(this.modal12);
        this.modal12.style.display = "block";
    }

    /*模态框关闭*/
    modalBox.close10 = function() {
        this.modal10.style.display = "none";
    }
    modalBox.close11 = function() {
        this.modal11.style.display = "none";
    }
    modalBox.close12 = function() {
        this.modal12.style.display = "none";
    }

    /*当用户点击模态框内容之外的区域，模态框也会关闭*/
    modalBox.outsideClick = function() {
        var modal10 = this.modal10;
        var modal11 = this.modal11;
        var modal12 = this.modal12;

        window.onclick = function(event) {
            if(event.target == modal10) {
                modal10.style.display = "none";
            }
            if(event.target == modal11) {
                modal11.style.display = "none";
            }
            if(event.target == modal12) {
                modal12.style.display = "none";
            }
        }
    }
    /*模态框初始化*/
    modalBox.init = function() {
        var that = this;

        this.triggerBtn10.onclick = function() {
            that.show10();
        }
        this.closeBtn10.onclick = function() {
            that.close10();
        }

        this.triggerBtn11.onclick = function() {
            that.show11();
        }
        this.closeBtn11.onclick = function() {
            that.close11();
        }

        this.triggerBtn12.onclick = function() {
            that.show12();
        }
        this.closeBtn12.onclick = function() {
            that.close12();
        }

        this.outsideClick();
    }
    modalBox.init();

})();


$(" .bb ").click(function () {
    var obj10=document.getElementById("triggerBtn10");
    var obj11=document.getElementById("triggerBtn11");
    var obj12=document.getElementById("triggerBtn12");
    $('#bb').modal();
    $('#closeBtn10').click(function(){
        obj10.parentNode.parentNode.remove();
    });
    $('#closeBtn11').click(function(){
        obj11.parentNode.parentNode.remove();
    });
    $('#closeBtn12').click(function(){
        obj12.parentNode.parentNode.remove();
    });
});