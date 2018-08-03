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
          flash[:message] = "Transaction Successfuly Created"
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
       @exposure = Exposure.find(params[:exposure_id])
    end


  def edit
    @transaction = set_transaction
      @exposure = Exposure.find(params[:exposure_id])
        @user = current_user
  end



  def destroy
    @transaction = set_transaction
      @exposure = Exposure.find(params[:exposure_id])

        if current_user.id == @transaction.exposure.user_id
          @transaction.destroy
          flash[:message] = "Transaction Successfully Deleted"
    redirect_to exposure_path(@exposure)
        else
          flash[:message] = "You Are Not Authorized to Delete This Transaction"
    redirect_to exposure_path(@exposure)
    end
  end



  private

    def transaction_params
      params.require(:transaction).permit(:name, :series, :par, :exposure_id)
    end

    def set_transaction
      @transaction = Transaction.find(params[:id])
    end


end
