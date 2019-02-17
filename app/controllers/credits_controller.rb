class CreditsController < ApplicationController

  def index
      @user = User.find(params[:user_id])
    if @user == current_user
      @credits = @user.credits
    else
      # render json: @credit, status: 201
      redirect_to exposures_path
    end

  end

  def credits_states
      @credits = Credit.none
        if params[:credit]
          @credits = Credit.pick_state(params[:credit][:state])
        end
  end

  def new
    @user = User.find(params[:user_id])
      @credit = Credit.new
          render partial: "ajax_new"
  end

  def create
    if params[:credit][:id].present?
      @credit = Credit.find(params[:credit][:id])
        @exposure = Exposure.find_or_create_by(user_id: current_user.id, credit_id: @credit.id)
        render json: @credit, status: 201
          # redirect_to credit_path(@credit)

            flash[:message] = "Existing Credit Successfully Added"
          else
            @credit = Credit.new(credit_params)
              if @credit.save
                @exposure = Exposure.find_or_create_by(user_id: current_user.id, credit_id: @credit.id)
                  render json: @credit, status: 201
                  # redirect_to credit_path(@credit)

                    flash[:message] = "Credit Successfully Created"
                  else
                    render :new
            end
      end
  end



 def update
   @credit = set_credit
    @credit.update(credit_params)
      render json: @credit, status: 202
      # redirect_to credit_path(@credit)
 end

  def show
    @credit = set_credit
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @credit}
    end
  end

  def edit
    @credit = set_credit
  end

  def destroy
    Credit.find(params[:id]).destroy
    redirect_to credits_path
  end



 private

 def set_credit
    @credit = Credit.find(params[:id])
  end

  def credit_params
    params.require(:credit).permit(:credit_name, :rating, :sector, :state)
  end


end
