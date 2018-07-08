class TransactionsController < ApplicationController


  def index
    @transactions = Transaction.all
  end


  def new
    @transaction = Transaction.new
  end

  def create
    @transaction = Transaction.new (transaction_params)
      if @transaction.save
        redirect_to transaction_path(@transaction)
      else
    render :new
  end
end

  def update
    @transaction = set_transaction
  end


  private

    def transaction_params
      params.require(:transaction).permit(:name, :series, :par, :exposure_id)
    end

    def set_transaction
      @transaction = Transaction.find(params[:id])
    end


end
