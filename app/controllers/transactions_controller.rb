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
    if params[:exposure_id] && !Exposure.exists?(params[:exposure_id])
      redirect_to exposures_path, alert: "Exposure Not Found"
    else
      @transaction = Transaction.new(exposure_id: params[:exposure_id])
    end
  end

  def create
    @transaction = Transaction.new (transaction_params)
      if @transaction.save
        redirect_to exposure_path(@exposure)
      else
    render :new
  end
end

  def update
    @transaction = set_transaction
    @transaction.update(params.require(:transaction))
    redirect_to transaction_path(@transaction)
  end

  def show
    if params[:exposure_id]
      @transaction = Exposure.find(params[:exposure_id]).transactions.find(params[:id])
    else
      @transaction = set_transaction
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
