class SessionsController < ApplicationController

  def new
      @user = User.new
      @users = User.all
    end

    def create
       if
        user = User.find_or_create_by(uid: auth['uid']) do |u|
          u.username = auth[:info][:nickname]
          u.email = auth[:info][:email]
          
        end
            session[:user_id] = user.id
              redirect_to user_path(user)

        else
          user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
          session[:user_id] = user.id
            redirect_to user_path(user)

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
