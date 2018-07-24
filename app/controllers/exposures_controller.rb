class ExposuresController < ApplicationController

    def index
        @exposures = Exposure.all
          @user = current_user
    end

    def show
      @exposure = set_exposure
        @user = current_user
    end

    def new
      @exposure = Exposure.new
        @transaction = Transaction.new
    end


    def create
        @exposure = Exposure.create(exposure_params)
          @exposure.transactions.create(params[:transactions])
      redirect_to exposure_path(@exposure)
    end

    def edit
      @exposure = set_exposure
    end

    def update
      @exposure = set_exposure
        @exposure.update(exposure_params)

        redirect_to exposure_path(@exposure)
    end

    def destroy
      @exposure = Exposure.find(params[:id])
        if current_user.id == @exposure.user_id
          @exposure.destroy
            redirect_to exposures_path
        else
          flash[:message] = "You are not authorized to delete this Exposure"
            redirect_to exposure_path(@exposure)
        end
    end



  private

    def exposure_params
      params.require(:exposure).permit(:limit)
    end

    def set_exposure
      @exposure = Exposure.find(params[:id])
    end

end
