class TransactionsController < ApplicationController


  def index
    if params[:exposure_id]
      @transactions = Exposure.find(params[:exposure_id]).transactions
    else
      @transactions = Transaction.all
    end
    user = current_user
  end

  def new
      @exposure = Exposure.find(params[:exposure_id])
        @transaction = Transaction.new
          @credit = Credit.new
            @user = current_user
  end

  def create
    @transaction = Transaction.new(transaction_params)
         @exposure = Exposure.find(params[:exposure_id])
             @exposure.transactions << @transaction
                if @transaction.save
        redirect_to exposure_path(@exposure)
      end
  end

  def update
    @transaction = set_transaction
      @transaction.update(transaction_params)
        @exposure = Exposure.find(params[:exposure_id])
          redirect_to exposure_path(@exposure)
  end

  def show
    if params[:exposure_id]
      @transaction = Exposure.find(params[:exposure_id]).transactions.find(params[:id])
    else
      @transaction = set_transaction
    end
      @user = current_user
      @exposure = Exposure.find(params[:exposure_id])
  end


  def edit
    @transaction = set_transaction
      @exposure = Exposure.find(params[:exposure_id])
        @user = current_user
  end



  def destroy
    Transaction.find(params[:id]).destroy
      @exposure = Exposure.find(params[:exposure_id])
    redirect_to exposure_path(@exposure)
  end



  private

    def transaction_params
      params.require(:transaction).permit(:name, :series, :par, :exposure_id)
    end

    def set_transaction
      @transaction = Transaction.find(params[:id])
    end


end
