class SessionsController < ApplicationController

  def new
      @user = User.new
      @users = User.all
    end

    def create
       if auth_hash = request.env['omniauth.auth']
         user = User.find_or_create_by_omniauth(auth_hash)
            session[:user_id] = user.id
              redirect_to user_path(user)
            else
               user = User.find_by(email: params[:user][:email])
             if user && user.authenticate(params[:user][:password])
               session[:user_id] = user.id
               # for use in js project
                  redirect_to exposures_path
                  # for Rails Project
                 # redirect_to user_path(user)
               else
                 flash[:notice] = "Log In Failed- Try Again or Register"
                  redirect_to '/'
        end
      end
    end

    def destroy
      reset_session
      flash[:notice] = "You've successfully logged out"
      redirect_to '/'
    end

    def auth
      request.env['omniauth.auth']
    end

end
