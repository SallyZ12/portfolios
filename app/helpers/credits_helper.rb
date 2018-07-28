module CreditsHelper


  def select_state
    select(:credit, :state, Credit::CREDIT_STATE)
  end



end
