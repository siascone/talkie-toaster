class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        debugger
        @post.user_id = current_user.id
        if @post
            @post.save!
            render :show
        else
            render json: @post.errors.full_messages, status: 402
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :subject)
    end

end
