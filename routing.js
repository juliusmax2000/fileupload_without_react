var http=require('http');
var router = require('express').Router();
var formidable = require('formidable');
var fs   = require('fs');
var crypto = require('crypto');
var user = require('./models/user');


router.get('/Download/*',(reqw,resp)=>{
    //resp.sendFile(__dirname + '/html/download.html');
    var url = reqw.url.split('/')[2];
    var path = __dirname + '\\ablage\\' + url;
    
    let files;

    try {
        files = fs.readdirSync(path);
        path = path + '\\' + files[0];

        resp.download(path);
    } catch(err) {
        // An error occurred
        console.error(err);
    }
});

router.get('/',(req,res)=>{
    res.sendFile(__dirname + '/html/index.html');
});

router.get('/Upload',(req,res)=>{ //UPLOAD
    res.sendFile(__dirname+'/html/drop.html');
});


//registrieren
router.get('/Registrieren',(req,res)=>{ //UPLOAD
    res.sendFile(__dirname+'/html/reg.html');
});

router.post('/Registrieren/DB/',(req,res)=>{//Nicht sicher = vorübergehender Test
   // return user.insertuser(req,res);
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var fname = fields.fname;
        var lname = fields.LastName;
        var email = fields.Email;
        var pwd = fields.pwd;
        //console.log(fname,lname,email,pwd);
        return insertuser(fname, lname, email, pwd);
    });
});

router.get('/css/:stylesheet', (req, res) => {
    res.sendFile(__dirname+'/css/' + req.params.stylesheet);
});
router.get('/img/:img', (req, res) => {
    res.sendFile(__dirname+'/img/' + req.params.img);
});


router.post('/Upload/fileupload',(req,resp)=>{
   
    console.log("In Hochladen");
    
    //var s=http.createServer(function (req, res) {
      //console.log("In Hochladen");
      //if (req.url == '/Upload/fileupload') {
        var form = new formidable.IncomingForm();
       // console.log(form);
        form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.path;
          
          
          //console.log("FILES===");
          //console.log(files);
    
          //console.log("FORM===");
          //console.log(form);
          var buf = crypto.randomBytes(16);
          var pathname = 'upload_' + buf.toString('hex');
          var createpath = __dirname+'/ablage/'+ pathname;

          fs.mkdirSync(createpath, { recursive: true }, (error) => {
              if(error) {
                  console.error('An error occurred: ', error);
              }
              else {
                  console.log("Directory created!");
              }
          });

          var newpath = createpath + '/' + files.filetoupload.name;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            console.log("New Path:");
            console.log(newpath);
            resp.write("File uploaded and moved!\n");
            resp.write('You can reach it under: localhost:3000/Download/' + pathname + '/' + files.filetoupload.name);
            resp.end();
            });
        });
      //} 
   //});

   //resp.send(s);

});

module.exports=router;