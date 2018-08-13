# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship (User has many Credits)
- [x] Include at least one belongs_to relationship (Transaction belongs to Exposure)
- [x] Include at least one has_many through relationship (Credit has many transactions through Exposures)
- [x] The "through" part of the has_many through includes at least one user submittable attribute (user.transactions.count, exposure.limit)
- [x] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Credit, Transaction)
- [x] Include a class level ActiveRecord scope method (Credit: scope :pick_state, -> (select_state){where('state = ?', select_state)} and URL: /credit_states)
- [x] Include signup (used own authentication)
- [x] Include login (used own authentication)
- [x] Include logout (used own authentication)
- [x] Include third party signup/login (how OmniAuth/Github)
- [x] Include nested resource show or index (users/2/credits)
- [x] Include nested resource "new" form (users/1/credits/new)
- [x] Include form display of validation errors (/credits/new)

Confirm:
- [x] The application is pretty DRY
- [x] Limited logic in controllers
- [x] Views use helper methods if appropriate
- [x] Views use partials if appropriate
