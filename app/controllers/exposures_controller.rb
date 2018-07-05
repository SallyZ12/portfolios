class ExposuresController < ApplicationController

    def index
      @exposures = Exposure.all
    end

    def show
      @exposure = set_exposure
    end

    def new
      @exposure = Exposure.new
    end


    def create
        @exposure = Exposure.create(exposure_params)
      redirect_to exposure_path(@exposure)
    end



  private

    def exposure_params
      params.require(:exposure).permit(:user_id, :credit_id, :limit)
    end

    def set_exposure
      @exposure = Exposure.find(params[:id])
    end

end
