
# README

Welcome to the Portfolios/JS Application.

This project was created to satisfy the FlatIron School's Rails/Javascript Project requirements.

This is an application to display portfolios of municpal bonds by Company (user) based on the Transactions associated with each Credit by Company.  A Company/Credit pairing is referred to as an Exposure.

This application primarily uses Ruby on Rails as well as Javascript.  Javascript is used with Exposures, Credits and Transactions in the exposure index and show pages and credit index and show pages.

To use this app:

1. fork and clone the branch portfolios-js from Github from the portfolios repository.
2. change directory (cd) into the directory "portfolios" and then "git checkout portfolios-js" the branch with the js code added to the Project,
3. run bundle install,
4. run rake db:migrate
5. run db:seed to initially populate the db in a development/test environment.  You do not want to use the seed file in production as the secure_passwords for a Company would be exposed. Take note of the passwords by company to login.


Overview:

This app allows a Company to maintain a list of credits in their portfolio with their associated transaction(s).
A Credit can belong to many Companies and a Company can belong to many Credits.
A Company/Credit pairing is defined as an Exposure.
A Transaction is unique to an Exposure meaning Transaction 1 can only belong to Exposure 1 (Company 1/Credit 1).
A Credit can not be deleted.  
An Exposure can only be deleted if no Transactions are associated with it.
An Exposure can only be edited/deleted by the Company for which it is associated with.
A Transaction can only be edited/deleted by the Company for which it is associated with.
You will be able to see the top 10 Transactions by Par among all Companies.
You will be able to select all Credits in a specific State regardless of Company.

Instructions for the Javascript Components only (JS sections are identified with AJAX or AJAX Response):

1. Register and if previously registered, Log In.  You may also Log In using your Github credentials.
2. Once registered/logged in you are taken to your Exposure Index page.
3. To see a list of exposures, select "Select For All Exposures"
4. Select a Company Link to be taken to Exposure Show Page, where you can select:

  a. Show Exposure,
  b. Exposure Transaction List, and
  c. AJAX - Add New Transaction

5. To Create a New Credit associated with an Exposure, Select "All [company] Credits Link", you'll be taken to the Credit Index page and select "AJAX - Add Existing or Create a New Credit" link.  Follow the form.

6. You may also select "All Credits" to see the AJAX response of all Credits.
7. To navigate to Credit Show page, select the "Credit Name" link.
8. To use the power of JS and to scroll through all Credits while staying on the same page, select "AJAX- Next Credit All Companies" link.  

The instructions above complete the added Javascript to the Rails application.


Things to Know:
1. There are 2 different categories of ratings.  

  External Rating : a Credit is assigned a rating that originates from a third party rating agency (external rating) and is required at the time of the Credit creation.  

  Company Rating: An Exposure is assigned a rating internally based on credit committee decisions and is not required at time of creation.

2. Exposure limit is internally assigned based on company guidelines.


Contribution Guide:
Did you find a bug?
Do not open up a GitHub issue if the bug is a security vulnerability in Rails, and instead to refer to security policy.

Ensure the bug was not already reported by searching on GitHub under Issues.

If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

If possible, use the relevant bug report templates to create the issue. Simply copy the content of the appropriate template into a .rb file, make the necessary changes to demonstrate the issue, and paste the content into the issue description:

Active Record (models, database) issues
Action Pack (controllers, routing) issues
Generic template for other issues
For more detailed information on submitting a bug report and creating an issue, visit our reporting guidelines.


License:
This project has been licensed under the MIT open source license.
https://github.com/SallyZ12/portfolios/blob/master/LICENSE
