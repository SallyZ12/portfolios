module CreditsHelper


  def select_state
    select(:credit, :state, Credit::CREDIT_STATE)
  end

  # def select
  #   select_tag :state, options_for_select(Credit::CREDIT_STATE)
  # end



end
