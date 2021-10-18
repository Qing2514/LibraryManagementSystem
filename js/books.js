
(function() {
    /*建立模态框对象*/
    var modalBox = {};
    /*获取模态框*/
    modalBox.modal1 = document.getElementById("myModal");
    modalBox.modal2 = document.getElementById("myModal2");
    modalBox.modal3 = document.getElementById("myModal3");
    modalBox.modal4 = document.getElementById("myModal4");
    modalBox.modal5 = document.getElementById("myModal5");
    modalBox.modal6 = document.getElementById("myModal6");
    modalBox.modal7 = document.getElementById("myModal7");
    modalBox.modal8 = document.getElementById("myModal8");
    modalBox.modal9 = document.getElementById("myModal9");
    /*获得trigger按钮*/
    modalBox.triggerBtn1 = document.getElementById("triggerBtn");
    modalBox.triggerBtn2 = document.getElementById("triggerBtn2");
    modalBox.triggerBtn3 = document.getElementById("triggerBtn3");
    modalBox.triggerBtn4 = document.getElementById("triggerBtn4");
    modalBox.triggerBtn5 = document.getElementById("triggerBtn5");
    modalBox.triggerBtn6 = document.getElementById("triggerBtn6");
    modalBox.triggerBtn7 = document.getElementById("triggerBtn7");
    modalBox.triggerBtn8 = document.getElementById("triggerBtn8");
    modalBox.triggerBtn9 = document.getElementById("triggerBtn9");
    /*获得关闭按钮*/
    modalBox.closeBtn1 = document.getElementById("closeBtn");
    modalBox.closeBtn2 = document.getElementById("closeBtn2");
    modalBox.closeBtn3 = document.getElementById("closeBtn3");
    modalBox.closeBtn4 = document.getElementById("closeBtn4");
    modalBox.closeBtn5 = document.getElementById("closeBtn5");
    modalBox.closeBtn6 = document.getElementById("closeBtn6");
    modalBox.closeBtn7 = document.getElementById("closeBtn7");
    modalBox.closeBtn8 = document.getElementById("closeBtn8");
    modalBox.closeBtn9 = document.getElementById("closeBtn9");
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
    modalBox.show4 = function() {
        console.log(this.modal4);
        this.modal4.style.display = "block";
    }
    modalBox.show5 = function() {
        console.log(this.modal5);
        this.modal5.style.display = "block";
    }
    modalBox.show6 = function() {
        console.log(this.modal6);
        this.modal6.style.display = "block";
    }
    modalBox.show7 = function() {
        console.log(this.modal7);
        this.modal7.style.display = "block";
    }
    modalBox.show8 = function() {
        console.log(this.modal8);
        this.modal8.style.display = "block";
    }
    modalBox.show9 = function() {
        console.log(this.modal9);
        this.modal9.style.display = "block";
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
    modalBox.close4 = function() {
        this.modal4.style.display = "none";
    }
    modalBox.close5 = function() {
        this.modal5.style.display = "none";
    }
    modalBox.close6 = function() {
        this.modal6.style.display = "none";
    }
    modalBox.close7 = function() {
        this.modal7.style.display = "none";
    }
    modalBox.close8 = function() {
        this.modal8.style.display = "none";
    }
    modalBox.close9 = function() {
        this.modal9.style.display = "none";
    }

    /*当用户点击模态框内容之外的区域，模态框也会关闭*/
    modalBox.outsideClick = function() {
        var modal1 = this.modal1;
        var modal2 = this.modal2;
        var modal3 = this.modal3;
        var modal4 = this.modal4;
        var modal5 = this.modal5;
        var modal6 = this.modal6;
        var modal7 = this.modal7;
        var modal8 = this.modal8;
        var modal9 = this.modal9;

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
            if(event.target == modal4) {
                modal4.style.display = "none";
            }
            if(event.target == modal5) {
                modal5.style.display = "none";
            }
            if(event.target == modal6) {
                modal6.style.display = "none";
            }
            if(event.target == modal7) {
                modal7.style.display = "none";
            }
            if(event.target == modal8) {
                modal8.style.display = "none";
            }
            if(event.target == modal9) {
                modal9.style.display = "none";
            }
        }
    }
    /*模态框初始化*/
    modalBox.init = function() {
        var that = this;

        this.triggerBtn1.onclick = function() {
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

        this.triggerBtn4.onclick = function() {
            that.show4();
        }
        this.closeBtn4.onclick = function() {
            that.close4();
        }

        this.triggerBtn5.onclick = function() {
            that.show5();
        }
        this.closeBtn5.onclick = function() {
            that.close5();
        }

        this.triggerBtn6.onclick = function() {
            that.show6();
        }
        this.closeBtn6.onclick = function() {
            that.close6();
        }

        this.triggerBtn7.onclick = function() {
            that.show7();
        }
        this.closeBtn7.onclick = function() {
            that.close7();
        }

        this.triggerBtn8.onclick = function() {
            that.show8();
        }
        this.closeBtn8.onclick = function() {
            that.close8();
        }

        this.triggerBtn9.onclick = function() {
            that.show9();
        }
        this.closeBtn9.onclick = function() {
            that.close9();
        }

        this.outsideClick();
    }
    modalBox.init();

})();


