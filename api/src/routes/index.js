const { Router } = require('express')
const usersRouter = require('../routes/users/usersRouter')
const productRouter = require('../routes/product/productRouter')
const { media } = require("./media/media")
const post = require("./post/post");
const shopsRoutes = require("./shops/shopsRoutes");

const router = Router()

router.use('/user', usersRouter)
router.use('/product', productRouter)

//Media
router.use('/media', media);

router.use('/post', post);


router.use('/shops',shopsRoutes);


module.exports = router;
