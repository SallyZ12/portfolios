class ExposuresController < ApplicationController

    def create
      @expsoure = Exposure.create(exposure_params)
    end


  private

    def exposure_params
      params.require(:exposure).permit(:user_id, :credit_id, :limit)
    end


end
