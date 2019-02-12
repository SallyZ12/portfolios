class ExposuresController < ApplicationController

    def index
        @exposures = Exposure.all
          @user = current_user
          respond_to do |format|
            format.html {render :show}
            format.json {render json: @exposures}
          end
    end

    def show
      @exposure = set_exposure
        @user = current_user
        respond_to do |format|
          format.html {render :show}
          format.json {render json: @exposure}
        end
    end

    def new
      @exposure = Exposure.new
        @transaction = Transaction.new
    end


    def create
        @exposure = Exposure.create(exposure_params)
          @exposure.transactions.create(params[:transactions])
              render json: @exposure, status: 201
      # redirect_to exposure_path(@exposure)
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
        if @exposure.transactions.present?
          flash[:message] = "You Must Delete All Transactions Before Deleting Exposure and Must Be The Owner"
            redirect_to exposure_path(@exposure)
          elsif current_user.id == @exposure.user_id
              @exposure.destroy
                  redirect_to exposures_path
            else
                flash[:message] = "You are not authorized to delete this Exposure"
                    redirect_to exposure_path(@exposure)
        end
    end



  private

    def exposure_params
      params.require(:exposure).permit(:limit, :rating)
    end

    def set_exposure
      @exposure = Exposure.find(params[:id])
    end

end
