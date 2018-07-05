class SessionsController < ApplicationController

  def new
      @user = User.new
      @users = User.all
    end

    def create
      user = User.find_by(username: params[:user][:username])
      if user && user.authenticate(params[:user][:password])
          session[:user_id] = user.id
            redirect_to user_path(user)
          else
            flash[:notice] = "Log In Failed- Try Again or Register"
           redirect_to '/'
      end
    end

    def destroy
      reset_session
      flash[:notice] = "You've successfully logged out"
      redirect_to '/'
    end

end
