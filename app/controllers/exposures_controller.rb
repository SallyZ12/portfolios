class ExposuresController < ApplicationController

    def index
        @exposures = Exposure.all
          @user = current_user
    end

    def show
      @exposure = set_exposure
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
      Exposure.find(params[:id]).destroy
      redirect_to exposures_path
    end



  private

    def exposure_params
      params.require(:exposure).permit(:limit)
    end

    def set_exposure
      @exposure = Exposure.find(params[:id])
    end

end
