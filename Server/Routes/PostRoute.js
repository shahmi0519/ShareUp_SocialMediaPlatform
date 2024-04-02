import express from "express"
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from '../Controllers/PostController.js'

const router = express.Router();

router.post('/:id',createPost)
router.get('/:id',getPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
router.put('/:id',likePost)
router.get('/:id',getTimelinePosts)


export default router;