var express = require("express");
var router = express.Router();
require("dotenv").config();
const productName = "Welcome";
const fileUrl = process.env.BASEURL;
/* GET home page. */



function checkAuth(req, res, next) {
	const token = req.cookies["access-token"];
	if (!token) {
	  return res.redirect("/login?message=Please login first to access this page.");
	}
	next();
  }
  
router.get("/", function (req, res, next) {
	res.render("home", {
		title: "Welcome to  Portal",
		productName: productName,
		fileUrl: fileUrl,
		backgroundClass: 'home-background'
	});
});


router.get("/register", (req, res, next) => {
	res.render("register", { title: "New User Registration - Step 1", productName: productName, fileUrl: fileUrl });
});
router.get("/slot-book", (req, res, next) => {
	res.render("slotBook", { title: "Product-details", productName: productName, fileUrl: fileUrl, backgroundClass: '', });
});
// router.get("/shop", checkAuth,(req, res, next) => {
// 	res.render("shop", { title: "shop", productName: productName, fileUrl: fileUrl });
// });

router.get("/shop", checkAuth, (req, res, next) => {
    res.render("shop", {
        title: "shop",
        productName: productName,
        fileUrl: fileUrl,
        backgroundClass: '', // No background for this page
    });
});

router.get("/slot", checkAuth,(req, res, next) => {
	res.render("slotBook", { title: "slotBook", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/history", checkAuth,(req, res, next) => {
	res.render("history", { title: "history", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/product", (req, res, next) => {
	res.render("product", { title: "product", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/register", (req, res, next) => {
	res.render("register", { title: "signUp page", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/contact", (req, res, next) => {
	res.render("contact", { title: "contact page", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/login", (req, res, next) => {
	res.render("login", { title: "login page", productName: productName, fileUrl: fileUrl });
});

router.get("/cart", (req, res, next) => {
	res.render("cart", { title: "cart", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/dashboard", (req, res, next) => {
	res.render("dashboard", { title: "Welcome to Dashboard", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/user-history", (req, res, next) => {
	res.render("userHistory", { title: "user-history", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/our-service", (req, res, next) => {
	res.render("ourCustomer", { title: "our-service", productName: productName, fileUrl: fileUrl ,  backgroundClass: '',});
});
router.get("/recent-matches", (req, res, next) => {
	res.render("recentMatches", { title: "recent-match", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});
router.get("/match-status", (req, res, next) => {
	res.render("matchStatus", { title: "match-status", productName: productName, fileUrl: fileUrl,  backgroundClass: '', });
});




router.get("/logout", (req, res, next) => {
	res.render("logout", { title: "Logout", productName: productName, fileUrl: fileUrl });
});



module.exports = router;
