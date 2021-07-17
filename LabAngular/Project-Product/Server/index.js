var express = require("express");
var app = express();
//dang su dung thu vien ejs
app.set("view engine","ejs");
app.set("views","./views");
//File khach hang duoc phep truy cap
app.use(express.static("public"));
app.listen(3000);

//Mongoose
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://satans2suzi:zfZ0s914vILvREmq@shoppingcard.anfvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    if(err){
        console.log("Mongo connect error:" + err)
    }else{
        console.log("Mongo connected successful.")
    }
});

//Body parse giu lieu o trong body muon lay thi su dung body parse
var bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({ extended: false}));

//multer upload file giu lieu
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()  + "-" + file.originalname)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if(file.mimetype=="image/bmp" || file.mimetype=="image/png" || file.mimetype=="image/jpeg"|| file.mimetype=="image/ipg"|| file.mimetype=="image/gif"){
            cb(null, true)
        }else{
            return cb(new Error('Only image are allowed!'))
        }
    }
}).single("marvelImage");
//Models
var Marvel = require("./Models/marvel")

app.get('/', function (req,res){
    res.send("Hello")
})
//form để hiển thị bên khách hàng
app.get('/add', function (req,res){
    res.render("add");
});

//Form để hứng dữ liệu khách hàng gửi lên
app.post('/add' , (req , res)=>{

    //Upload file
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "ket qua": 0, "errMsg":"A Multer error occurred when uploading."})
            console.log("A Multer error occurred when uploading.");
        } else if (err) {
            res.json({ "ket qua": 0, "errMsg":"An unknown error occurred when uploading."})
            console.log("An unknown error occurred when uploading." + err);
        }else{
            var marvel = Marvel({
                Name: req.body.txtName,
                Image: req.file.filename,
                Level: req.body.marvelLevel
            })
            marvel.save(function (err){
                if(err){
                    res.json({"ket qua": 0, "errMsg":"Loi trong qua trinh upload"})
                }else{
                    res.json({"ket qua": 1, "errMsg":"Upload thanh cong"})
                }
            })
            // res.send(req.file.filename);
            // console.log(req.file); // Thông tin file đã upload
            // if(req.body.txtUn && req.body.txtPa){
            //     var un = req.body.txtUn;
            //     var pa = req.body.txtPa;
            //     res.json({"username":un, "password": pa, "file": req.file.filename});
            // }else{
            //     res.json({"result":0});
            // }
        }

    });
});
// Hien thi danh sach
app.get("/list", function (req,res){
    Marvel.find(function (err,data) {
        if(err){
            res.json({"ket qua": 0, "errMsg":"Loi trong qua lay giu lieu"+ err})
        }else{
            res.render("list", {danhsach:data})
        }
    })
})
