class TransactionsController < ApplicationController


  def index
    @transactions = Transaction.all
  end


  def new
    @transaction = Transaction.new
  end

  def create
    @transaction = Transaction.new (transaction_params)
  end




  private

    def transaction_params
      params.require(:transaction).permit(:name, :series, :par, :exposure_id)
    end

    def set_transaction
      @transaction = Transaction.find(params[:id])
    end


end
