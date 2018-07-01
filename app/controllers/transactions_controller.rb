class TransactionsController < ApplicationController


  def index
    @transactions = Transaction.all
  end


  def new
    @transaction = Transaction.new
  end






  private

    def transaction_params
      params.require(:transaction).permit(:name, :series)
    end

    def set_transaction
      @transaction = Transaction.find(params[:id])
    end


end
