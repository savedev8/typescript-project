import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema
    extends EntityState<Comment, number> {
    isLoading?: boolean;
    error?: string;
}
