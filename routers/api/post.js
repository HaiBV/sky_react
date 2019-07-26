const router = require('express').Router();
const auth = require('middlewares/auth');
const PostMiddleware = require('middlewares/post');
const PostController = require('controllers/api/PostController');

/* GET user route. */
router.get('/', auth, PostController.getPosts);
router.get('/:id', auth, PostController.getPost);
router.post('/', [auth, PostMiddleware.validator('createPost')], PostController.store);
router.delete('/:id', auth, PostController.deletePost);

router.put('/:id/like', auth, PostController.likePost);
router.put('/:id/unlike', auth, PostController.unlikePost);
router.post('/:id/comment', [auth, PostMiddleware.validator('addComment')], PostController.commentPost);
router.delete('/:id/comment/:comment_id', auth, PostController.deleteComment);

module.exports = router;
