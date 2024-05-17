import { Router } from 'express';
import kakaoRouter from './kakaoRouter';
import userRouter from './userRouter';
import categoryRouter from './categoryRouter';
import buddyRouter from './buddyRouter';
import postRouter from './postRouter';
import hospitalRouter from './hospitalRouter';
import commentRouter from './commentRouter';
import searchRouter from './searchRouter';

const router = Router();
router.use('/api/auth', kakaoRouter); 
router.use('/api/users',userRouter)
router.use('/api/groups', categoryRouter);
router.use('/api/buddy', buddyRouter);
router.use('/api/post', postRouter);
router.use('/api/hospital', hospitalRouter);
router.use('/api/comment', commentRouter);
router.use('/api/search', searchRouter);

export default router

