(function () {
    /*建立模态框对象*/
    var modalBox = {};
    /*获取模态框*/
    modalBox.modal13 = document.getElementById("myModal13");
    modalBox.modal14 = document.getElementById("myModal14");
    modalBox.modal15 = document.getElementById("myModal15");
    /*获得trigger按钮*/
    modalBox.triggerBtn13 = document.getElementById("triggerBtn13");
    modalBox.triggerBtn14 = document.getElementById("triggerBtn14");
    modalBox.triggerBtn15 = document.getElementById("triggerBtn15");
    /*获得关闭按钮*/
    modalBox.closeBtn13 = document.getElementById("closeBtn13");
    modalBox.closeBtn14 = document.getElementById("closeBtn14");
    modalBox.closeBtn15 = document.getElementById("closeBtn15");
    /*模态框显示*/
    modalBox.show13 = function () {
        console.log(this.modal13);
        this.modal13.style.display = "block";
    }
    modalBox.show14 = function () {
        console.log(this.modal14);
        this.modal14.style.display = "block";
    }
    modalBox.show15 = function () {
        console.log(this.modal15);
        this.modal15.style.display = "block";
    }

    /*模态框关闭*/
    modalBox.close13 = function () {
        this.modal13.style.display = "none";
    }
    modalBox.close14 = function () {
        this.modal14.style.display = "none";
    }
    modalBox.close15 = function () {
        this.modal15.style.display = "none";
    }

    /*当用户点击模态框内容之外的区域，模态框也会关闭*/
    modalBox.outsideClick = function () {
        var modal13 = this.modal13;
        var modal14 = this.modal14;
        var modal15 = this.modal15;

        window.onclick = function (event) {
            if (event.target == modal13) {
                modal13.style.display = "none";
            }
            if (event.target == modal14) {
                modal14.style.display = "none";
            }
            if (event.target == modal15) {
                modal15.style.display = "none";
            }
        }
    }
    /*模态框初始化*/
    modalBox.init = function () {
        var that = this;

        this.triggerBtn13.onclick = function () {
            that.show13();
        }
        this.closeBtn13.onclick = function () {
            that.close13();
        }

        this.triggerBtn14.onclick = function () {
            that.show14();
        }
        this.closeBtn14.onclick = function () {
            that.close14();
        }

        this.triggerBtn15.onclick = function () {
            that.show15();
        }
        this.closeBtn15.onclick = function () {
            that.close15();
        }

        this.outsideClick();
    }
    modalBox.init();

})();


$(" .aa ").click(function () {
    var obj13=document.getElementById("triggerBtn13");
    var obj14=document.getElementById("triggerBtn14");
    var obj15=document.getElementById("triggerBtn15");
    $('#aa').modal();
    $('#closeBtn13').click(function(){
        obj13.parentNode.parentNode.remove();
    });
    $('#closeBtn14').click(function(){
        obj14.parentNode.parentNode.remove();
    });
    $('#closeBtn15').click(function(){
        obj15.parentNode.parentNode.remove();
    });
});