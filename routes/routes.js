const router=require("express").Router()    // router object

const {encoder} =require("../middelware/bodyParser")

const {homePage,
    aboutPage,
    servicePage,
    carsPage,
    contact,
    featurePage,
 testimonialPage,
 eroor404
 ,contactStore
} = require("../controller/front Controller")

// Admin Routes Controller
const AdminRouter=require("./adminRoutes/adminRoutes")

router.get("", homePage)
router.get("/about",aboutPage)
router.get("/service",servicePage)
router.get("/feature",featurePage)
router.get("/cars",carsPage)
router.get("/testimonials",testimonialPage)
router.get("/contact",contact)
router.post("/contact",encoder, contactStore)


//this routes for admin
router.use("/admin",AdminRouter)

router.get("/*",eroor404)

module.exports=router