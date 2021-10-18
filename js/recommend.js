
(function() {
    /*建立模态框对象*/
    var modalBox = {};
    /*获取模态框*/
    modalBox.modal1 = document.getElementById("img1");
    modalBox.modal2 = document.getElementById("img2");
    modalBox.modal3 = document.getElementById("img3");
    /*获得关闭按钮*/
    modalBox.closeBtn1 = document.getElementById("closeBtn");
    modalBox.closeBtn2 = document.getElementById("closeBtn2");
    modalBox.closeBtn3 = document.getElementById("closeBtn3");
    /*模态框显示*/
    modalBox.show1 = function() {
        console.log(this.modal1);
        this.modal1.style.display = "block";
    }
    modalBox.show2 = function() {
        console.log(this.modal2);
        this.modal2.style.display = "block";
    }
    modalBox.show3 = function() {
        console.log(this.modal3);
        this.modal3.style.display = "block";
    }

    /*模态框关闭*/
    modalBox.close1 = function() {
        this.modal1.style.display = "none";
    }
    modalBox.close2 = function() {
        this.modal2.style.display = "none";
    }
    modalBox.close3 = function() {
        this.modal3.style.display = "none";
    }

    /*当用户点击模态框内容之外的区域，模态框也会关闭*/
    modalBox.outsideClick = function() {
        var modal1 = this.modal1;
        var modal2 = this.modal2;
        var modal3 = this.modal3;

        window.onclick = function(event) {
            if(event.target == modal1) {
                modal1.style.display = "none";
            }
            if(event.target == modal2) {
                modal2.style.display = "none";
            }
            if(event.target == modal3) {
                modal3.style.display = "none";
            }
        }
    }
    /*模态框初始化*/
    modalBox.init = function() {
        var that = this;

        this.modal1.onclick = function() {
            that.show1();
        }
        this.closeBtn1.onclick = function() {
            that.close1();
        }

        this.triggerBtn2.onclick = function() {
            that.show2();
        }
        this.closeBtn2.onclick = function() {
            that.close2();
        }

        this.triggerBtn3.onclick = function() {
            that.show3();
        }
        this.closeBtn3.onclick = function() {
            that.close3();
        }

        this.outsideClick();
    }
    modalBox.init();

})();


