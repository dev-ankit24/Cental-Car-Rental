function home(req,res){
    res.render("admin/home/index",{title:"Admin Home"})
}

module.exports={home}